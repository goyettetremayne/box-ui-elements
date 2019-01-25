#!/bin/bash

# translation properties file
PROPERTIES="i18n/en-US.properties"

# Styling variables
red=$"\e[1;31m"
green=$"\e[1;32m"
blue=$"\e[1;34m"
end=$"\e[0m\n"

# commit updated translations if any
check_and_commit_updated_translations() {
    if ! git diff --quiet HEAD $PROPERTIES; then
        printf "${red}--------------------------------------------------------${end}"
        printf "${red}Committing updated translations${end}"
        printf "${red}--------------------------------------------------------${end}"
        git add $PROPERTIES || exit 1
        git commit --amend --no-edit --no-verify || exit 1
        printf "${red}--------------------------------------------------------${end}"
        printf "${red}Amended commit with translations, please push again with --no-verify${end}"
        printf "${red}--------------------------------------------------------${end}"
        exit 1
    else
        printf "${green}--------------------------------------------------------${end}"
        printf "${green}en-US.properties is already up to date${end}"
        printf "${green}--------------------------------------------------------${end}"
    fi
}

# lint, test, and build assets to update translations
prepush() {
    printf "${blue}-------------------------------------------------------------${end}"
    printf "${blue}Building bundles${end}"
    printf "${blue}-------------------------------------------------------------${end}"
    yarn build:i18n || exit 1

    printf "${blue}-------------------------------------------------------------${end}"
    printf "${blue}Linting${end}"
    printf "${blue}-------------------------------------------------------------${end}"
    yarn lint || exit 1

    printf "${blue}-------------------------------------------------------------${end}"
    printf "${blue}Checking flow types${end}"
    printf "${blue}-------------------------------------------------------------${end}"
    yarn flow check || exit 1

    printf "${blue}-------------------------------------------------------------${end}"
    printf "${blue}Testing${end}"
    printf "${blue}-------------------------------------------------------------${end}"
    yarn test || exit 1

    printf "${blue}-------------------------------------------------------------${end}"
    printf "${blue}Building all sources, this will update i18n/json${end}"
    printf "${blue}-------------------------------------------------------------${end}"
    yarn build:prod:es || exit 1

    printf "${blue}-------------------------------------------------------------${end}"
    printf "${blue}Building bundles again, this will update en-US.properties${end}"
    printf "${blue}-------------------------------------------------------------${end}"
    yarn build:i18n || exit 1

    check_and_commit_updated_translations
}

# Execute this script
if ! prepush; then
    printf "${red}---------------------------------------------------------${end}"
    printf "${red}Error: failure in prepush script${end}"
    printf "${red}---------------------------------------------------------${end}"
    exit 1
fi
