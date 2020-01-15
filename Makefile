REMOTE=http://ec2-18-221-51-190.us-east-2.compute.amazonaws.com/:5000
LOCALHOST=http://localhost:5000

DIR=client/src/
#for mac users: brew install gsed
SED=sed
UNAME_S := $(shell uname -s)
ifeq ($(UNAME_S),Darwin)
        SED=gsed
endif


# Switch from local distribution to remote
remote:
	find ${DIR} -type f -exec ${SED} -i 's|${LOCALHOST}|${REMOTE}|' {} \;

local:
	find ${DIR} -type f -exec ${SED} -i 's|${REMOTE}|${LOCALHOST}|' {} \;

