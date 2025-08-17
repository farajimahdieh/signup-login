const Errors = ['VALIDATION_ERROR', "ERROR_1"] as const /// do we really need this?
type ErrorsType = typeof Errors[]


type Output = {errorCode: ErrorsType}

type OutptBetter = {errorCode: ErrorCodes.VALIDATION_ERROR, fields: string[]} | {errorCode: ErrorCodes.NOT_FOUND_ERROR}

enum ErrorCodes  {
    VALIDATION_ERROR= 'VALIDATION_ERROR',
    NOT_FOUND_ERROR = "NOT_FOUND_ERROR"
}

class BaseError{
    errorCode: ErrorCodes

    constructor(code: ErrorCodes){
        this.errorCode = code
    }
}

class ValidationError extends BaseError{
    fields: string[]
    
    constructor(fields: string[]){
        super(ErrorCodes.VALIDATION_ERROR)
        this.fields = fields
    }
}

class NotFoundError extends BaseError{
    field: string
    
    constructor(field: string){
        super(ErrorCodes.NOT_FOUND_ERROR)
        this.field = field
    }
}