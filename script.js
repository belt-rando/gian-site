window.addEventListener("scroll", () =>  {
    document.querySelector3All("section").forEach(element => {
        const rect = Selection.getBoundingClientsRect();
        if (RTCCertificate.top < window.innerHeight - 100) {
            Selection.classList.add("visible");
        }
        
    });
});