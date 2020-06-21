releaseFolder=.release
# newPackageJsonFile=${releaseFolder}/.package.json.build
nexusBaseRepository=http://nexus.dev.activenetwork.com/nexus/service/local/repositories/libs-releases/content/com/active/
activeLinkUI=active-link-web-ui
zipFileName=

getVersion() {
  # rm -rf $newPackageJsonFile
  # touch $newPackageJsonFile
  # IFS=''
  # versionRe="( *\"version\": *\")(.*)\","
  # while read -r line; do
  #   if [[ $line =~ $versionRe ]];
  #   then
  #       currentVersion=${BASH_REMATCH[2]}

  #       # IFS=.
  #       # read -r -a versions <<< "$currentVersion"
  #       # IFS=''

  #       # if [ $commandLineVersion ]; then
  #         # nextVersion=$commandLineVersion
  #       # else
  #         # nextVersion="${versions[0]}.${versions[1]}.$((versions[2] + 1))"
  #       # fi

  #       # echo "${BASH_REMATCH[1]}${nextVersion}\"," >> $newPackageJsonFile
  #   # else
  #     # echo $line  >> $newPackageJsonFile
  #   fi
  # done < ./package.json
  currentVersion=`git describe --tags --abbrev=0 | cut -c 2-`

  zipFileName=${activeLinkUI}-${currentVersion}.zip
}

syncNexus() {
  repository=${nexusBaseRepository}/$1/${currentVersion}/$2

  curl -v --upload-file $releaseFolder/$2 $repository
}

clean() {
  rm -rf $releaseFolder
}

help() {
    echo ""
    echo "This script relase passport-ui-app"
    echo ""
    sed -n -e '/) \#\#/d' -e '1,/\#\# Handle command line parameter/d' \
      -e '/\#\# Handle command line parameter done/,10000d' \
      -e 's:^[ \t]*\([^(]*\)):  \1:p' \
      -e 's:^[ \t]*##[ \t]*\(.*\):      \1:p'  "$0"
}

## Handle command line parameter
while [ $# -gt 0 ];
do
    arg=$1
    shift
    case "$arg" in
         -v)
            ## package version
            commandLineVersion="$1"
            shift
            ;;

         -help | -h | -? | --help)
            ## print help
            help
            exit 1
            ;;

        *)
            ## error out for unknown command
            error "bad arg: $arg"
            ;;
    esac
done
## Handle command line parameter done

# Prepare to build
clean
mkdir $releaseFolder

# echo 'Build package'

# echo 'build'
# npm run build
getVersion
# echo "bump version from $currentVersion to $nextVersion"

echo "Access build folder"
cd ./build

echo 'zip package'
zip -r ../${releaseFolder}/$zipFileName ./*
# zip -r ${releaseFolder}/$zipFileName ./build/*

echo 'back to project folder'
cd -

# echo 'Build package done'
echo 'zip package done'

# echo 'Upload package and tag it'

# git add .
# git commit --allow-empty -m "AUTOMATED COMMIT: Commit formatted source code."
# git tag -a v${currentVersion} -m "Bump version to ${currentVersion} by release script"
# git push -f --no-verify origin v${currentVersion}

# currentBranchName=`git rev-parse --abbrev-ref HEAD`
# if [ "$currentBranchName" = "develop" ]; then
#   git tag -f latest
#   git push -f --no-verify origin latest
# fi

syncNexus $activeLinkUI $zipFileName

# rm package.json
# cp $newPackageJsonFile package.json

# git add package.json
# git commit -m "Tag ${currentVersion} by release script"
# git push -f --no-verify

# echo 'Upload package and tag it done'
#clean

echo 'Uploaded package'
