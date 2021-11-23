variable "region" {
  type        = string
  default     = "eu-west-1"
  description = "The region where we are working in"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = var.region
}
resource "aws_vpc" "terraform_project" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "Joseph Terraform Project VPC"
  }
}
resource "aws_subnet" "eu-west-1a" {
  vpc_id            = aws_vpc.terraform_project.id
  cidr_block        = "10.0.0.0/24"
  availability_zone = "${var.region}a"

  tags = {
    Name = "Joseph Terraform Project Subnet 1a"
  }
}
resource "aws_subnet" "eu-west-1b" {
  vpc_id            = aws_vpc.terraform_project.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = "${var.region}b"

  tags = {
    Name = "Joseph Terraform Project Subnet 1b"
  }
}
resource "aws_internet_gateway" "terraform_project" {
  vpc_id = aws_vpc.terraform_project.id

  tags = {
    Name = "terraform project VPC - Internet Gateway"
  }

}
resource "aws_security_group" "for_http_alb" {
  name        = "for_http"
  description = "Allows HTTP requests through the Application Load Balancer"
  vpc_id      = aws_vpc.terraform_project.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  #   ingress {
  #     from_port   = 22
  #     to_port     = 22
  #     protocol    = "SSH"
  #     cidr_blocks = ["0.0.0.0/0"]
  #   }

  tags = {
    Name = "Allow HTTP requests on port 80"
  }
}
resource "aws_route_table" "terraform_project" {
  vpc_id = aws_vpc.terraform_project.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.terraform_project.id
  }

  tags = {
    Name = "Subnet Route Table for Terraform Project VPC"
  }
}
resource "aws_launch_template" "web" {
  name          = "JMTerraformProject-"
  image_id      = "ami-0f29c8402f8cce65c"
  instance_type = "t2.micro"

  vpc_security_group_ids = [aws_security_group.for_http_alb.id]

  #user_data = "${base64}#! /bin/bash"
}
resource "aws_s3_bucket" "lb_logs" {
  bucket = "terraform-project-logs-bucket"
  acl    = "public-read-write"

  tags = {
    Name = "Logs for Terraform Project Load Balancer"
  }
}
resource "aws_lb" "web" {
  name = "web-alb"
  security_groups = [
    aws_security_group.for_http_alb.id
  ]
  subnets = [
    aws_subnet.eu-west-1a.id,
    aws_subnet.eu-west-1b.id
  ]
}

resource "aws_lb_target_group" "test" {
  name     = "tf-joseph-lb-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.terraform_project.id
}

resource "aws_lb_listener" "port" {
  load_balancer_arn = aws_lb.web.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type = "forward"
  }
}
resource "aws_autoscaling_group" "JSM" {
  availability_zones = ["${var.region}a", "${var.region}b", "${var.region}c"]
  name               = "JSMTerraform-asg"

  load_balancers   = [aws_lb.web.id]
  min_size         = 1
  desired_capacity = 2
  max_size         = 3

  launch_template {
    id      = aws_launch_template.web.id
    version = "$Latest"
  }

  lifecycle {
    create_before_destroy = true
  }
}

output "lb_dns_name" {
  value = aws_lb.web.dns_name
}



