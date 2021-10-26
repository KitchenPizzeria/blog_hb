
teaching=https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.doc
idc=https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md
milestone=https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt

declare -a blogs=("${teaching}" "${idc}" "${milestone}")

for blog in ${blogs[@]}
do
    size=$(curl -sI ${blog} | grep -i Content-Length | awk '{print $2}')
    echo $(${size} < 100000000)
    if [[ ${size} < 100000000 ]]
    then
        echo "Less than 100MB"
    fi
done


