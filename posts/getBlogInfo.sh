#!/bin/bash

# Criteria
# Blogs are non-empty and not too large
# change file names to .txt format

for blog in $(cat posts/urls.txt);
do
    content=$(curl -s "${blog}")
    
    IFS='/' 
    read -a path <<< "$blog"
    path=${path[${#path[@]}-1]}

    IFS='.' 
    read -a file <<< "$path"
    filename="downloaded/${file}.txt"
    echo "FILENAME: $filename"
    echo "$content" > "$filename"
done 

for file in posts/downloaded/*;
do
    size=$(wc -c < "$file")
    if [[ ${size} != 0 && ${size} < 999999 ]] # Less than 100MB and non-empty
    then
        echo $file
        $(mv $file ../verified/$file)
    fi
done