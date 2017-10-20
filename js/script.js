let myKey = document.querySelectorAll(".key");
        let boom = document.getElementById("boom");
        let clap = document.getElementById("clap");
        let hihat = document.getElementById("hihat");
        let kick = document.getElementById("kick");
        let tink = document.getElementById("tink");

        window.addEventListener("keydown", playDrum);

        function playDrum(evt){

       if(evt.key=="a"){
                boom.play();
               boom.currentTime=0;
               myKey[0].classList.toggle("hover");

           setTimeout(blend, 200);
           function blend() {
            for(var i = 0; i < myKey.length; i++) {
                console.log("current loop" + i);
                myKey[i].classList.remove("hover");
            }
             }}
           else if(evt.key=="s"){
                clap.play();
               clap.currentTime=0;
                myKey[1].classList.toggle("hover");
               setTimeout(blend, 200);

           function blend() {
            for(var i = 0; i < myKey.length; i++) {
                console.log("current loop" + i);
                myKey[i].classList.remove("hover");
            }

             }}
            else if(evt.key=="d"){
                hihat.play();
               hihat.currentTime=0;
                myKey[2].classList.toggle("hover");
                setTimeout(blend, 200);
             function blend() {
            for(var i = 0; i < myKey.length; i++) {
                console.log("current loop" + i);
                myKey[i].classList.remove("hover");
            }

             }}
            else if(evt.key=="f"){
                kick.play();
               kick.currentTime=0;
                myKey[3].classList.toggle("hover");
               setTimeout(blend, 200);
             function blend() {
            for(var i = 0; i < myKey.length; i++) {
                console.log("current loop" + i);
                myKey[i].classList.remove("hover");
            }

             }}
            else if(evt.key=="g"){
                tink.play();
               tink.currentTime=0;
                myKey[4].classList.toggle("hover");
               setTimeout(blend, 200);
                //tink.addEventListener("ended", blend); another option :)
             function blend() {
            for(var i = 0; i < myKey.length; i++) {
                console.log("current loop" + i);
                myKey[i].classList.remove("hover");
            }

             }}
            }

        myKey[0].addEventListener("click", clicking);
        function clicking(){
             boom.play();
               boom.currentTime=0;
               myKey[0].classList.add("hover");

            myKey[0].addEventListener("transitionend", function(){
                myKey[0].classList.remove("hover");
            })

        }
        myKey[1].addEventListener("click", clicking2);
        function clicking2(){
             clap.play();
               clap.currentTime=0;
               myKey[1].classList.add("hover");
            myKey[1].addEventListener("transitionend", function(){
                myKey[1].classList.remove("hover");
            })
        }

         myKey[2].addEventListener("click", clicking3);
        function clicking3(){
             hihat.play();
               hihat.currentTime=0;
               myKey[2].classList.add("hover");
            myKey[2].addEventListener("transitionend", function(){
                myKey[2].classList.remove("hover");
            })
        }

         myKey[3].addEventListener("click", clicking4);
        function clicking4(){
             kick.play();
               kick.currentTime=0;
               myKey[3].classList.add("hover");
            myKey[3].addEventListener("transitionend", function(){
                myKey[3].classList.remove("hover");
            })
        }

         myKey[4].addEventListener("click", clicking5);
        function clicking5(){
             tink.play();
               tink.currentTime=0;
               myKey[4].classList.add("hover");
            myKey[4].addEventListener("transitionend", function(){
                myKey[4].classList.remove("hover");
            })
        }
