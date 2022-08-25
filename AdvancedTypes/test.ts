interface Request {
    sum: number,
    from: number,
    to: number,
}

enum PStatus {
    Success = 'success',
    Failed = 'failed',
}

interface SuccessData {
    databaseId: number,
    sum: number,
    from: number,
    to: number,
}

interface FailedData {
    errorMessage: string,
    errorCode: number,
}
//!1===================================
interface IResponse {
    status: PStatus;
    data: SuccessData | FailedData;
}

//!2==================================
interface IResponseSuccess {
    status: PStatus.Success;
    data: SuccessData;
}

interface IResponseFailed {
    status: PStatus.Failed;
    data: FailedData;
}
