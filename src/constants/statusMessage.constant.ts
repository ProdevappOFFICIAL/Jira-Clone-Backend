

   const statusMessage = () => ({
    SERVER_ERROR_MESSAGE: 'Internal Server Error',
    SERVER_ERROR : 'Unknown Error Occurred',
    SYNTAX_ERROR_MESSAGE: 'Invalid JSON Format, Please check your request body',
    SYNTAX_ERROR: 'Unknown JSON Format Type',
    ERROR_OCCURED: 'Error occured at path: '
  })

  export const stat = statusMessage()