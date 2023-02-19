const Codes = {
	Continue: 100,
	SwitchingProtocols: 101,
	Processing: 102,
	OK: 200,
	Created: 201,
	Accepted: 202,
	NoContent: 204,
	MultiStatus: 207,
	Reported: 208,
	Used: 226,
	Moved: 301,
	Found: 302,
	Other: 303,
	NotModified: 304,
	UseProxy: 305,
	SwitchProxy: 306,
	TempRedirect: 307,
	Redirect: 308,
	BadRequest: 400,
	Unauthorized: 401,
	Forbidden: 403,
	NotFound: 404,
	NotAllowed: 405,
	NotAcceptable: 406,
	Timeout: 408,
	Conflict: 409,
	Gone: 410,
	Teapot: 418,
	Misdirected: 421,
	Unprocessable: 422,
	Locked: 423,
	Failed: 424,
	TooEarly: 425,
	UpgradeRequired: 426,
	TooManyRequests: 429,
	HeaderTooLarge: 431,
	InternalError: 500,
	BadGateway: 502,
	Unavailable: 503,
	GatewayTimeout: 504,
	NotSupported: 505,
};

class StatusCodes {
	static Continue = Codes.Continue;
	static SwitchingProtocols = Codes.SwitchingProtocols;
	static Processing = Codes.Processing;
	static OK = Codes.OK;
	static Created = Codes.Created;
	static Accepted = Codes.Accepted;
	static NoContent = Codes.NoContent;
	static MultiStatus = Codes.MultiStatus;
	static Reported = Codes.Reported;
	static Used = Codes.Used;
	static Moved = Codes.Moved;
	static Found = Codes.Found;
	static Other = Codes.Other;
	static NotModified = Codes.NotModified;
	static UseProxy = Codes.UseProxy;
	static SwitchProxy = Codes.SwitchProxy;
	static TempRedirect = Codes.TempRedirect;
	static Redirect = Codes.Redirect;
	static BadRequest = Codes.BadRequest;
	static Unauthorized = Codes.Unauthorized;
	static Forbidden = Codes.Forbidden;
	static NotFound = Codes.NotFound;
	static NotAllowed = Codes.NotAllowed;
	static NotAcceptable = Codes.NotAcceptable;
	static Timeout = Codes.Timeout;
	static Conflict = Codes.Conflict;
	static Gone = Codes.Gone;
	static Teapot = Codes.Teapot;
	static Misdirected = Codes.Misdirected;
	static Unprocessable = Codes.Unprocessable;
	static Locked = Codes.Locked;
	static Failed = Codes.Failed;
	static TooEarly = Codes.TooEarly;
	static UpgradeRequired = Codes.UpgradeRequired;
	static TooManyRequests = Codes.TooManyRequests;
	static HeaderTooLarge = Codes.HeaderTooLarge;
	static InternalError = Codes.InternalError;
	static BadGateway = Codes.BadGateway;
	static Unavailable = Codes.Unavailable;
	static GatewayTimeout = Codes.GatewayTimeout;
	static NotSupported = Codes.NotSupported;
}

export { StatusCodes };
