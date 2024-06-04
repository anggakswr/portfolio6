import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="box-center min-h-screen flex-col gap-4 bg-gray-900">
      <div className="box-center gap-4">
        <p className="font-bold">Error</p>
        <div className="h-8 w-px bg-white"></div>
        <p>Oops, there is a mistake.</p>
      </div>

      <Link to={`/`} className="text-blue-500">
        &laquo; Back to Home
      </Link>
    </div>
  );
}
