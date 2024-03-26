import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

export default function UrlSync() {
  const navigate = useNavigate();

  function replace(hash) {
    navigate(hash, { replace: true });
  }

  useEffect(() => {
    if (window.google) {
      google.script.url.getLocation((location) => replace(location.hash));
      google.script.history.setChangeHandler((e) => replace(e.location.hash));
    }
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (window.google) {
      // ignore the first access
      if (location.pathname === "/" && location.key === "default") return;
      console.log("location changed", location);
      google.script.history.replace(
        { timestamp: new Date().getTime() },
        null,
        location.pathname + location.search
      );
    }
  }, [location]);

  return <></>;
}
