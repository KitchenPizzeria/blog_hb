
teaching=https://academy-project-blogs.s3-eu-west-1.amazonaws.com/teaching_code.doc
idc=https://academy-project-blogs.s3-eu-west-1.amazonaws.com/IDC.md
milestone=https://academy-project-blogs.s3-eu-west-1.amazonaws.com/milestones.txt

# Criteria
# Blogs are non-empty and not too large
# convert files to .txt format

declare -a blogs=("${teaching}" "${idc}" "${milestone}")
declare -a verif_blogs=()

for blog in ${blogs}
do
    file=$(curl -sI ${blog})
    size=$(${file} | grep -i Content-Length | awk '{print $2}')
    if [[ ! -z ${file} && ${size} < 999999 ]]
    then
        IFS="/"
        read -a strarr <<< ${blog}
        echo "${strarr[@]}"
    fi
done


