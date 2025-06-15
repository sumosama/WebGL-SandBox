const hideFullScreenButton = "";
const buildUrl = "Build";
const loaderUrl = buildUrl + "/db19ac4c2cc6334ff9293f05e95e624c.loader.js";
const config = {
    dataUrl: buildUrl + "/f4a8ef868c1c57b9d55768233fd6c966.data.unityweb",
    frameworkUrl: buildUrl + "/f8d522b3bd467683c8a8efc7a0412dbc.framework.js.unityweb",
    codeUrl: buildUrl + "/bbf4e7b5ce886e9541fbf1262d277f0e.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "HOLIDAY WORKS",
    productName: "Unity-WebGL",
    productVersion: "0.1.0",
};

const container = document.querySelector("#unity-container");
const canvas = document.querySelector("#unity-canvas");
const loadingCover = document.querySelector("#loading-cover");
const progressBarEmpty = document.querySelector("#unity-progress-bar-empty");
const progressBarFull = document.querySelector("#unity-progress-bar-full");
const fullscreenButton = document.querySelector("#unity-fullscreen-button");
const spinner = document.querySelector('.spinner');


const canFullscreen = (function() {
    for (const key of [
        'exitFullscreen',
        'webkitExitFullscreen',
        'webkitCancelFullScreen',
        'mozCancelFullScreen',
        'msExitFullscreen',
    ]) {
        if (key in document) {
            return true;
        }
    }
    return false;
}());

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    container.className = "unity-mobile";
    config.devicePixelRatio = 4;
}
loadingCover.style.display = "";

const script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
        spinner.style.display = "none";
        progressBarEmpty.style.display = "";
        progressBarFull.style.width = `${100 * progress}%`;
    }).then((unityInstance) => {
        loadingCover.style.display = "none";
        if (canFullscreen) {
            if (!hideFullScreenButton) {
                fullscreenButton.style.display = "";
            }
            fullscreenButton.onclick = () => {
                unityInstance.SetFullscreen(1);
            };
        }

        document.addEventListener('visibilitychange', function ()
        {
            if (document.visibilityState == "hidden")
            {
                unityInstance.SendMessage("JSReceiver", "OnHidden");
            }
            else
            {
                unityInstance.SendMessage("JSReceiver", "OnShown");
            }
        });

        visualViewport.addEventListener('resize', (target) =>
        {
            const json = '{ "windowHeight" :' + window.innerHeight + ', "visualViewportHeight" : ' + visualViewport.height + ' }'
            unityInstance.SendMessage("JSReceiver", "OnResizeViewport", json);
        });

    }).catch((message) => {
        alert(message);
    });
};
document.body.appendChild(script);
