ENV_FILE_NAME=".env"
USE_ENV_FILE=false

if [ "$USE_ENV_FILE" = true ]; then
  ENV_FILE_OPTION="--env-file=$ENV_FILE_NAME"
else
  ENV_FILE_OPTION=""
fi

echo $ENV_FILE_OPTION