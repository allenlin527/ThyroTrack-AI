document.addEventListener("DOMContentLoaded", function () {
    // 載入頭部組件
    fetch("components.html")
        .then((response) => response.text())
        .then((data) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");

            document.getElementById("header-component").innerHTML =
                doc.getElementById("header-template").outerHTML;
            document.getElementById("sidebar-component").innerHTML =
                doc.getElementById("sidebar-template").outerHTML;
            document.getElementById("footer-component").innerHTML =
                doc.getElementById("footer-template").outerHTML;
        });
});
