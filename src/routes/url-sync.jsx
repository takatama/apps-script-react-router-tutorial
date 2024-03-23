import { useEffect } from "react";
import { useLocation } from "react-router";

export default function UrlSync() {
  const location = useLocation();

  useEffect(() => {
    console.log("new location: ", location);
    if (window.google) {
      google.script.history.replace(
        { timestamp: new Date().getTime() },
        null,
        location.pathname + location.search
      );
    }
  }, [location]);

  return <></>;
}
