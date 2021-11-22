# blog_hb

## Getting Started

To run this blog site server, there will be two modes of installation for both Docker and Git

### Docker

To run this blog website inside of a Docker container, please first download Homebrew from the installation instructions [here](https://brew.sh). Now install Docker by using this command inside your terminal.

```
brew install Docker

```

Now we need to run the image.

```
docker run -p 0.0.0.0:3000:3000 blog:0.2
```
