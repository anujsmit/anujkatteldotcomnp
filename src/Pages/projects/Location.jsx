
// Location.jsx
import React, { useEffect, useState } from "react";
import "./Location.css";
import locationimg from "../../assets/Location.png";

function Location() {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        fetchBrowserLocation();
    }, []);

    const fetchBrowserLocation = () => {
        setLoading(true);
        setError("");
        setLocation(null);

        if (!navigator.geolocation) {
            setLoading(false);
            setError("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const accuracy = position.coords.accuracy;

                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
                        {
                            headers: {
                                Accept: "application/json",
                            },
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Unable to determine address.");
                    }

                    const data = await response.json();
                    const address = data.address || {};

                    setLocation({
                        latitude,
                        longitude,
                        accuracy,
                        country: address.country || "Unknown",
                        countryCode: address.country_code
                            ? address.country_code.toUpperCase()
                            : "",
                        region:
                            address.state ||
                            address.region ||
                            "Unknown",
                        city:
                            address.city ||
                            address.town ||
                            address.village ||
                            address.municipality ||
                            "Unknown",
                        postalCode: address.postcode || "Unknown",
                        district:
                            address.county ||
                            address.state_district ||
                            "Unknown",
                        displayName:
                            data.display_name || "Unknown location",
                    });
                } catch (err) {
                    console.error("Reverse geocoding error:", err);

                    setLocation({
                        latitude,
                        longitude,
                        accuracy,
                        country: "Unavailable",
                        countryCode: "",
                        region: "Unavailable",
                        city: "Unavailable",
                        postalCode: "Unavailable",
                        district: "Unavailable",
                        displayName: "Address information unavailable",
                    });
                }

                setLoading(false);
            },
            (geoError) => {
                console.error("Geolocation error:", geoError);
                setLoading(false);

                if (geoError.code === 1) {
                    setError(
                        "Location permission was denied. Please allow location access in your browser settings and reload the page."
                    );
                } else if (geoError.code === 2) {
                    setError(
                        "Your location could not be determined. Please check your device location settings."
                    );
                } else if (geoError.code === 3) {
                    setError(
                        "The location request timed out. Please reload the page and try again."
                    );
                } else {
                    setError("Unable to determine your location.");
                }
            },
            {
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0,
            }
        );
    };

    const copyCoordinates = async () => {
        if (!location) return;

        try {
            await navigator.clipboard.writeText(
                `${location.latitude.toFixed(
                    6
                )}, ${location.longitude.toFixed(6)}`
            );

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    const reloadPage = () => {
        window.location.reload();
    };

    const mapUrl = location
        ? `https://www.openstreetmap.org/export/embed.html?bbox=${
              location.longitude - 0.03
          }%2C${location.latitude - 0.02}%2C${
              location.longitude + 0.03
          }%2C${location.latitude + 0.02}&layer=mapnik&marker=${
              location.latitude
          }%2C${location.longitude}`
        : "";

    const googleMapsUrl = location
        ? `https://www.google.com/maps?q=${location.latitude},${location.longitude}`
        : "#";

    return (
        <div className="location-page">
            <div className="location-container">
                {/* Header */}
                <header className="header">
                    <div className="header-content">
                        <div className="header-title-row">
                            <div className="header-icon">
                                <img
                                    src={locationimg}
                                    alt="Location"
                                />
                            </div>

                            <div>
                                <h1>My Location</h1>
                                <div className="tagline">
                                    Powered by Anujkattel.com.np
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Description */}
                <p className="description">
                    Find your current location using your browser's
                    built-in geolocation service. Your browser may ask
                    for permission before providing your location.
                </p>

                {/* Status Header */}
                <div className="section-header">
                    <strong>Browser Geolocation</strong>

                    {loading && (
                        <span className="detecting">
                            Detecting...
                        </span>
                    )}

                    {!loading && location && (
                        <span className="detected">
                            ● Location detected
                        </span>
                    )}
                </div>

                {/* Main Content */}
                <div className="content">
                    {/* Loading */}
                    {loading && (
                        <div className="loading">
                            <div className="spinner"></div>

                            <h3>
                                Detecting your location...
                            </h3>

                            <p>
                                Please allow location access when your
                                browser asks for permission.
                            </p>
                        </div>
                    )}

                    {/* Error */}
                    {error && !loading && (
                        <div className="error">
                            <div className="error-icon">
                                ⚠️
                            </div>

                            <strong>
                                Unable to get location
                            </strong>

                            <p>{error}</p>

                            <button onClick={reloadPage}>
                                Reload Page
                            </button>
                        </div>
                    )}

                    {/* Location Result */}
                    {location && !loading && (
                        <div className="location-result">
                            {/* Location Grid */}
                            <div className="location-grid">
                                {/* Information */}
                                <div className="info">
                                    <div className="info-title">
                                        <span>📍</span>
                                        <div>
                                            <h2>
                                                Your Location
                                            </h2>

                                            <p>
                                                Current browser
                                                location information
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="label">
                                            Latitude
                                        </div>

                                        <div className="value">
                                            {location.latitude.toFixed(
                                                6
                                            )}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="label">
                                            Longitude
                                        </div>

                                        <div className="value">
                                            {location.longitude.toFixed(
                                                6
                                            )}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="label">
                                            Country
                                        </div>

                                        <div className="value">
                                            {location.country}

                                            {location.countryCode && (
                                                <span className="country-code">
                                                    {" "}
                                                    (
                                                    {
                                                        location.countryCode
                                                    }
                                                    )
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="label">
                                            Region
                                        </div>

                                        <div className="value">
                                            {location.region}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="label">
                                            City
                                        </div>

                                        <div className="value">
                                            {location.city}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="label">
                                            District
                                        </div>

                                        <div className="value">
                                            {location.district}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="label">
                                            Postal Code
                                        </div>

                                        <div className="value">
                                            {
                                                location.postalCode
                                            }
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="label">
                                            Accuracy
                                        </div>

                                        <div className="value">
                                            {Math.round(
                                                location.accuracy
                                            )}{" "}
                                            meters
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="label">
                                            Source
                                        </div>

                                        <div className="value">
                                            Browser Geolocation
                                        </div>
                                    </div>
                                </div>

                                {/* Map */}
                                <div className="map-container">
                                    <iframe
                                        title="Current Location"
                                        src={mapUrl}
                                        className="map"
                                        loading="lazy"
                                        
                                    />

                                    <div className="map-overlay">
                                       
                                        Current location
                                    </div>
                                </div>
                            </div>

                            {/* Coordinates */}
                            <div className="coordinates">
                                <div className="coordinates-text">
                                    <strong>
                                        Coordinates
                                    </strong>

                                    <span>
                                        {location.latitude.toFixed(
                                            6
                                        )}
                                        ,{" "}
                                        {location.longitude.toFixed(
                                            6
                                        )}
                                    </span>
                                </div>

                                <button
                                    className="copy-btn"
                                    onClick={copyCoordinates}
                                >
                                    {copied
                                        ? "✓ Copied"
                                        : "Copy"}
                                </button>
                            </div>

                            {/* Buttons */}
                            <div className="buttons">
                                <a
                                    href={googleMapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="google-btn"
                                >
                                    Open in Google Maps
                                </a>

                                <button
                                    onClick={reloadPage}
                                    className="refresh-btn"
                                >
                                    ↻ Refresh Location
                                </button>
                            </div>

                            {/* Address */}
                            <div className="address-box">
                                <span className="address-icon">
                                    📌
                                </span>

                                <div>
                                    <strong>
                                        Detected Location
                                    </strong>

                                    <p>
                                        {location.displayName}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Privacy Note */}
                <div className="privacy-note">
                    <span>🔒</span>

                    <div>
                        <strong>Your location is permission-based</strong>

                        <p>
                            Your browser asks for permission before
                            providing location information to this
                            page. You can manage location permissions
                            from your browser settings.
                        </p>
                    </div>
                </div>

                {/* Blog */}
                <section className="location-blog">
                    <div className="blog-header">
                        <span className="blog-badge">
                            LOCATION GUIDE
                        </span>

                        <h2>
                            How Does Browser Location Detection
                            Work?
                        </h2>

                        <p>
                            Learn how websites can determine your
                            location using browser geolocation,
                            latitude and longitude, and modern
                            location services.
                        </p>
                    </div>

                    <div className="blog-content">
                        <h3>
                            What Is Browser Geolocation?
                        </h3>

                        <p>
                            Browser geolocation is a web technology
                            that allows websites to request your
                            device's geographic position. When you
                            give permission, your browser can provide
                            latitude and longitude coordinates that
                            represent your estimated location.
                        </p>

                        <p>
                            These coordinates can then be converted
                            into readable information such as a
                            country, region, city, district, and
                            postal code. This process is commonly
                            called reverse geocoding.
                        </p>

                        <h3>
                            How Does Location Detection Work?
                        </h3>

                        <div className="blog-steps">
                            <div className="blog-step">
                                <span>01</span>

                                <div>
                                    <h4>
                                        Your browser requests
                                        permission
                                    </h4>

                                    <p>
                                        When you open the location
                                        tool, your browser may ask
                                        whether you want to share
                                        your location.
                                    </p>
                                </div>
                            </div>

                            <div className="blog-step">
                                <span>02</span>

                                <div>
                                    <h4>
                                        Your device determines
                                        your position
                                    </h4>

                                    <p>
                                        Depending on your device,
                                        available services may use
                                        GPS, Wi-Fi networks,
                                        cellular networks, or other
                                        positioning technologies.
                                    </p>
                                </div>
                            </div>

                            <div className="blog-step">
                                <span>03</span>

                                <div>
                                    <h4>
                                        Coordinates are returned
                                    </h4>

                                    <p>
                                        Your browser provides
                                        latitude and longitude
                                        coordinates representing
                                        your estimated position.
                                    </p>
                                </div>
                            </div>

                            <div className="blog-step">
                                <span>04</span>

                                <div>
                                    <h4>
                                        Coordinates are converted
                                        into an address
                                    </h4>

                                    <p>
                                        Reverse geocoding can turn
                                        geographic coordinates into
                                        readable location information.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3>
                            What Are Latitude and Longitude?
                        </h3>

                        <p>
                            Latitude and longitude are geographic
                            coordinates used to describe a position
                            anywhere on Earth.
                        </p>

                        <div className="info-card">
                            <div>
                                <div className="info-card-icon">
                                    ↕
                                </div>

                                <strong>
                                    Latitude
                                </strong>

                                <p>
                                    Measures how far north or south
                                    a location is from the Equator.
                                </p>
                            </div>

                            <div>
                                <div className="info-card-icon">
                                    ↔
                                </div>

                                <strong>
                                    Longitude
                                </strong>

                                <p>
                                    Measures how far east or west
                                    a location is from the Prime
                                    Meridian.
                                </p>
                            </div>
                        </div>

                        <h3>
                            How Accurate Is Browser Location?
                        </h3>

                        <p>
                            Location accuracy depends on your device,
                            surroundings, network connection, and the
                            positioning technology available to your
                            browser.
                        </p>

                        <p>
                            A smartphone outdoors with GPS enabled
                            may provide a more precise result than a
                            desktop computer relying primarily on
                            network-based positioning.
                        </p>

                        <p>
                            The accuracy value displayed by this tool
                            is supplied by your browser and represents
                            an estimate of the possible error around
                            the reported position.
                        </p>

                        <h3>
                            Does This Tool Use My IP Address?
                        </h3>

                        <p>
                            No. This page uses the browser's
                            Geolocation API to request your current
                            coordinates. It does not need to determine
                            your location from your IP address.
                        </p>

                        <p>
                            Your browser controls the location request
                            and normally asks for your permission
                            before providing geographic coordinates
                            to a website.
                        </p>

                        <h3>
                            Is My Location Shared Automatically?
                        </h3>

                        <p>
                            Modern browsers generally require
                            permission before a website can access
                            precise device location through the
                            Geolocation API.
                        </p>

                        <p>
                            If you deny the permission, the webpage
                            cannot receive the browser-provided
                            coordinates.
                        </p>

                        <h3>
                            What Can You Use a Location Finder For?
                        </h3>

                        <ul className="use-case-list">
                            <li>
                                Checking your current geographic
                                coordinates
                            </li>

                            <li>
                                Finding the city or region associated
                                with your position
                            </li>

                            <li>
                                Opening your current position on a
                                map
                            </li>

                            <li>
                                Testing browser geolocation
                                functionality
                            </li>

                            <li>
                                Learning how latitude and longitude
                                work
                            </li>

                            <li>
                                Building location-based web
                                applications
                            </li>
                        </ul>

                        <h3>
                            Why Might Location Detection Fail?
                        </h3>

                        <p>
                            There are several reasons a browser may
                            be unable to determine your location.
                            Location permission may have been denied,
                            your device's location services may be
                            disabled, or the browser may temporarily
                            be unable to obtain a reliable position.
                        </p>

                        <p>
                            If detection fails, check your browser's
                            location permissions, make sure location
                            services are enabled, and reload the page.
                        </p>

                        {/* CTA */}
                        <div className="blog-cta">
                            <div>
                                <span>
                                    READY TO CHECK?
                                </span>

                                <h3>
                                    Find Your Current Location
                                </h3>

                                <p>
                                    Allow your browser to access your
                                    location and see your coordinates
                                    and location information.
                                </p>
                            </div>

                            <button onClick={reloadPage}>
                                Detect Again
                            </button>
                        </div>

                        {/* FAQ */}
                        <div className="faq-section">
                            <div className="faq-heading">
                                <span className="blog-badge">
                                    FAQ
                                </span>

                                <h2>
                                    Frequently Asked Questions
                                </h2>

                                <p>
                                    Common questions about browser
                                    location detection, coordinates,
                                    accuracy, and privacy.
                                </p>
                            </div>

                            <div className="faq-list">
                                <details>
                                    <summary>
                                        How does this website find
                                        my location?
                                    </summary>

                                    <p>
                                        This website uses your
                                        browser's Geolocation API.
                                        After you give permission,
                                        your browser provides
                                        geographic coordinates that
                                        can be used to determine your
                                        estimated physical location.
                                    </p>
                                </details>

                                <details>
                                    <summary>
                                        Do I need to allow location
                                        permission?
                                    </summary>

                                    <p>
                                        Yes. Browser-based location
                                        detection normally requires
                                        you to grant permission before
                                        the website can receive your
                                        device's location.
                                    </p>
                                </details>

                                <details>
                                    <summary>
                                        Can a website find my precise
                                        location without permission?
                                    </summary>

                                    <p>
                                        A website cannot normally use
                                        the browser's precise
                                        Geolocation API without the
                                        required permission. Browser
                                        and operating-system privacy
                                        controls determine whether
                                        location information can be
                                        provided.
                                    </p>
                                </details>

                                <details>
                                    <summary>
                                        How accurate is my detected
                                        location?
                                    </summary>

                                    <p>
                                        Accuracy varies depending on
                                        your device and environment.
                                        GPS-enabled mobile devices can
                                        often provide better accuracy
                                        than desktop computers relying
                                        primarily on network-based
                                        positioning.
                                    </p>
                                </details>

                                <details>
                                    <summary>
                                        Why is my location sometimes
                                        incorrect?
                                    </summary>

                                    <p>
                                        Location services provide an
                                        estimate. Buildings, weak GPS
                                        signals, network conditions,
                                        disabled location services,
                                        and environmental factors can
                                        affect accuracy.
                                    </p>
                                </details>

                                <details>
                                    <summary>
                                        What do latitude and
                                        longitude mean?
                                    </summary>

                                    <p>
                                        Latitude describes how far
                                        north or south a location is
                                        from the Equator. Longitude
                                        describes how far east or west
                                        it is from the Prime Meridian.
                                    </p>
                                </details>

                                <details>
                                    <summary>
                                        Can I open my location in
                                        Google Maps?
                                    </summary>

                                    <p>
                                        Yes. Once your coordinates
                                        are detected, use the
                                        "Open in Google Maps" button
                                        to view the position on a
                                        map.
                                    </p>
                                </details>

                                <details>
                                    <summary>
                                        What happens if I deny
                                        location permission?
                                    </summary>

                                    <p>
                                        The browser will prevent the
                                        webpage from receiving your
                                        location coordinates. You can
                                        usually change the permission
                                        in your browser settings and
                                        reload the page.
                                    </p>
                                </details>

                                <details>
                                    <summary>
                                        Does this work on mobile
                                        phones?
                                    </summary>

                                    <p>
                                        Yes. Modern mobile browsers
                                        generally support browser
                                        geolocation. For the best
                                        results, make sure your
                                        device's location services
                                        are enabled.
                                    </p>
                                </details>

                                <details>
                                    <summary>
                                        Is browser geolocation the
                                        same as IP location?
                                    </summary>

                                    <p>
                                        No. Browser geolocation can
                                        use device-based positioning
                                        technologies and may provide
                                        more precise coordinates.
                                        IP-based location generally
                                        estimates a broader geographic
                                        area from an internet address.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <p className="footer-note">
                    Address lookup powered by OpenStreetMap
                    Nominatim · Coordinates are used to display your
                    location on this page.
                </p>
            </div>
        </div>
    );
}

export default Location;

