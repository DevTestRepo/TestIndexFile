let deviceType;
// let urlBase = "https://www.google.com";
let withNeedle;
let dose;
let marketType;
function setCookie(){
    const exdays = 1;

    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();

    let urlNeg = `/${deviceType}`;
    urlNeg = urlNeg.replaceAll(' ','_').toLocaleLowerCase();
    let cookie = {
        lang:local,
        url:urlNeg,
    };
    // document.cookie = "withNeedleNeg =" + withNeedle + ";" + expires + ";path=/";
    // document.cookie = "dose =" + dose + ";" + expires + ";path=/";
    // document.cookie = "deviceTypeNeg =" + deviceType + ";" + expires + ";path=/";
    // document.cookie = "localNeg =" + local + ";" + expires + ";path=/";
    // document.cookie = "marketTypeNeg =" + marketType + ";" + expires + ";path=/";
    // document.cookie = "urlNeg =" + urlNeg + ";" + expires + ";path=/";
    // Cookies.set('withNeedleNeg', withNeedle, { expires: 365,path: '/',sameSite: 'Lax' })
    // Cookies.set('dose', dose, { expires: 365,path: '/',sameSite: 'Lax' })
    // Cookies.set('deviceTypeNeg', deviceType, { expires: 365,path: '/',sameSite: 'Lax' })
    // Cookies.set('localNeg', local, { expires: 365,path: '/',sameSite: 'Lax' })
    // Cookies.set('marketTypeNeg', marketType, { expires: 365,path: '/',sameSite: 'Lax' })
    // Cookies.set('urlNeg', urlNeg, { expires: 365,path: '/',sameSite: 'Lax' })
    Cookies.set('withNeedleNeg', withNeedle, { expires: 365, path: '/',secure: true })
    Cookies.set('dose', dose, { expires: 365, path: '/',secure: true })
    Cookies.set('deviceTypeNeg', deviceType, { expires: 365, path: '/',secure: true })
    Cookies.set('localNeg', local, { expires: 365, path: '/',secure: true })
    Cookies.set('marketTypeNeg', marketType, { expires: 365, path: '/',secure: true })
    Cookies.set('urlNeg', urlNeg, { expires: 365, path: '/',secure: true })

    const splitUrl = location.pathname.split("/");
    // $.cookie("not-now", 1, {
    //     expires: 7
    // });
    Cookies.set("not-now", 1, { expires: 7, path: '/',secure: true })
    // console.log(location.origin + "/" + splitUrl[1] + "/" + splitUrl[2] + urlNeg + "/app/index.html");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const selectedlocal = urlParams.get('local');
    if(selectedlocal=='uk'){
        document.location.href = location.origin  /* + splitUrl[1] + "/" + "uk"*/ + urlNeg + "/app/index.html";
    }else{
        document.location.href = location.origin  /* splitUrl[1] + "/" + splitUrl[2]*/ + urlNeg + "/app/index.html";
    }
   
}

function setDos (dos){
    dose = dos;
    setDeviceType(`genryzon_pen_${dos}mg`);
}
function setLocal(l){
    local = l;
}
function setDeviceType(l){
    deviceType = l;
}
function setWithNeedle(l){
    withNeedle = l;
}
function setMarketType(l){
    marketType = l;
}

