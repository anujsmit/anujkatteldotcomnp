import React, { useEffect, useRef } from "react";

function Random() {
    const containerRef = useRef(null);

    useEffect(() => {
        window.openVideoPlayers = window.openVideoPlayers || [];
        window.openVideoPlayers.push({
            allowPlaylistAds: false,
            target: containerRef.current,
            videoID: "jsicrmflBrp",
            autoplay: true,
            float: true,
        });

        const SRC = "https://open.video/video.js";
        if (!document.querySelector(`script[src="${SRC}"]`)) {
            const s = document.createElement("script");
            s.src = SRC;
            s.async = true;
            s.setAttribute("data-ezscrex", "false");
            s.setAttribute("data-cfasync", "false");
            document.body.appendChild(s);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                width: "100%",
                maxWidth: "560px",
                height: "315px",
                margin: "35px auto",
                borderRadius: "14px",
                overflow: "hidden",
                background: "#000",
            }}
        />
    );
}

export default Random;