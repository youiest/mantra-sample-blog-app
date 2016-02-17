# this script shows last commits on the repo,
# checks out last branch worked on,
# and starts demo and package tests
for branch in `git branch -r | grep -v HEAD`;do echo -e `git show --format="%ci %cr" $branch | head -n 1` \\t$branch; done | sort -r
git log --branches -1 --pretty=format:'%D'
# To go to the branch of the most recent commit:
# http://stackoverflow.com/questions/2427288/how-to-get-back-to-the-latest-commit-after-checking-out-a-previous-commit
#git checkout $(git log --branches -1 --pretty=format:'%D' |sed 's/HEAD -> \|tag: [^,]*\|,.*//g')
# trap ctrl-c and call ctrl_c()
trap ctrl_c INT

function ctrl_c() {
        echo "** Trapped CTRL-C so killing meteors"
        #kill -9 `ps ax | grep meteor | grep 7001 | awk '{print $1}'` &
        #kill -9 `ps ax | grep meteor | grep 6001 | awk '{print $1}'` &
        #kill -9 `ps ax | grep meteor | grep 5001 | awk '{print $1}'` &
        kill -9 `ps ax | grep meteor | grep 4000 | awk '{print $1}'` &
        #kill -9 `ps ax | grep meteor | awk '{print $1}'` &
}

for i in `seq 1 2`; do
    sleep 1
    echo -n "."
done
mkdir logs
npm install
npm run test-watch > ./logs/testwatch.log &
meteor -p 5005 > ./logs/m.log &
tail -F ./logs/m.log
