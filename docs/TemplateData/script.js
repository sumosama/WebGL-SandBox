const hideFullScreenButton = "";
const buildUrl = "Build";
const loaderUrl = buildUrl + "/45bbb09e84e40c399d04670785e54c63.loader.js";
const config = {
    dataUrl: buildUrl + "/0f7933fe8b625557465765a28c7c9567.data.unityweb",
    frameworkUrl: buildUrl + "/f4d82928cf1e6f30c21aee3646afe92b.framework.js.unityweb",
    codeUrl: buildUrl + "/44f3b17ec83ef7ebe32775884390d5d8.wasm.unityweb",
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
