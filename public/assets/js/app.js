let currentStep = 0;
let LastStep = 6;
let lastStep = 6;
let bulletStartedFrom = 3;
let bulletCurrentIndex = 1;
let jumbedIndex = 4;
    $(function () {
        // chcekUserAgent();
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const selectedlocal = 'in';
        if(selectedlocal=='in')
	  {
          $("#lang-screen").remove()
          console.log('uk')
        }
        
        $("#outerStepper").steps({
            headerTag: "h2",
            bodyTag: "section",
            enablePagination: false,
            enableKeyNavigation: false,
            titleTemplate: '<div class="hidden">#title#</div>',
          });
          $("#wizard").steps({
            headerTag: "h2",
            bodyTag: "section",
            enablePagination: false,
            enableKeyNavigation: false,
            titleTemplate: '<div class="hidden">#title#</div>',
          });
          $('[role = "next-alt"]').on("click", function () {
            $("#wizard").steps("next");
          });

          $("#introStepper").steps({
            headerTag: "h2",
            bodyTag: "section",
            enablePagination: false,
            enableKeyNavigation: false,
            titleTemplate: '<div class="hidden">#title#</div>',
          });

        /* Close Loading */
        setTimeout(() => {
            document.querySelector('#loadingWindow').classList.add('hidden');
            document.querySelector('#allPages').classList.remove('hidden');
        }, 3500);


        goNext();
        $('[role = "next"]').on("click", wizardNextHandler)
        $('[role = "next"]').on("touchmove", wizardNextHandler)
        $('[role = "outer-next"]').on("click", function () {
            // console.log('clicked')
            document.querySelector('body').classList.remove('all-p-0');
            // console.log('clicked after remove ')

            $("#outerStepper").steps("next");
            $('#outerStepper-p-1').css('display', 'block');
        })
        $('[role = "intro-next"]').on("click", function () {
            goNext();
        })

        function wizardNextHandler() {
            console.log("clicked");
            $("#wizard").steps("next");
            if ($("#wizard").steps("getCurrentIndex") == 1) {
              document.querySelector("body").classList.add("all-p-0");
            } else if (
              $("#wizard").steps("getCurrentIndex") == 1 &&
              $("#introStepper").steps("getCurrentIndex") == 0
            ) {
              document.querySelector("body").classList.remove("all-p-0");
            }
          }

        $.fn.steps.setStep = function (step) {
            var self = $(this);
            var currentIndex = self.steps('getCurrentIndex');
            // Calculates the number of missing steps to get to the desired step
            var missingSteps = Math.abs(step - currentIndex);
            // The method then determines whether to navigate forward or backward to the desired step by checking if the step parameter is greater than the current index
            var direction = step > currentIndex ? 'next' : 'previous';
            // Move forward or backward by one step each time the loop runs, until it reaches the desired step
            for (var i = 0; i < missingSteps; i++) {
                self.steps(direction);
            }
        };
        $('#skipIntroBtn').on('click', function () {
            if (currentStep == LastStep) {
                setCookie();
            }else{
                skip();
            }
        })

    });

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return 0;
// }

function jumb(n) {
    goNext();
    for (let i = 0; i < n; i++) {
        $("#wizard").steps("next");
    }

}

function skip() {
    // console.log("skk");
    currentStep = 6;
    $("#introStepper").steps('setStep', 7);
    StepChanged();
}

function goNext() {
    if (currentStep != 6) {
        $("#introStepper").steps("next");
        currentStep++
        StepChanged();
    }
}

function goBack() {
    if (currentStep != 0) {
        $("#introStepper").steps("previous");
        currentStep--
        StepChanged();
    }
}

function StepChanged() {
    $('#currentStepNumber').text(currentStep);
    $('#currentStepLabel').text(labels[currentStep - 1]);
    $('#nextStepNumber').text(currentStep + 1);
    $('#nextStepLabel').text(labels[currentStep]);
    let bullets = document.querySelectorAll('.bullet');
    bullets.forEach(b => {
        b.classList.remove('selected')
    })
    if (currentStep - 1 < bullets.length) {
        bullets[currentStep - 1].classList.add('selected')
    }
    if (currentStep == 6) {
        $('#nav2').css('display', 'none');
        $('#skipIntroBtn').text('Finish >')
    }else{
        $('#nav2').css('display', 'flex');
        $('#skipIntroBtn').text('Skip Intro >')
    }

    // if (currentStep == 6) {
    //     $('#nav2').css('display', 'none');
    //     $('#finishBtn').removeClass('hide')
    //     $('#skipIntroBtn').addClass('hide');
    // }else{
    //     $('#nav2').css('display', 'flex');
    //     // $('#skipIntroBtn').text('Skip Intro >');
    //     $('#skipIntroBtn').removeClass('hide')
    //     $('#finishBtn').addClass('hide')
    // }

    if (currentStep == 1) {
        $('#Footer').css('display','none');
    }else{
        $('#Footer').css('display','block');
    }
}
function chcekUserAgent() {
    //show image full screen assigned to body background if user agent is desktop
    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
        document.body.classList.add('bg-desktop','isDesktop');
        document.body.replaceChildren()
    }

}
let labels = ["Select the device", "Follow the guide", "View injection site", "Use the device", "Change the device", "Find notes and tips", ""];
