
   function AgregarAlHistorial(objetojson){
    Historial.unshift(objetojson);
    //console.log(Historial[0].Grados);

    var ul = document.getElementById("historial");
    ul.innerHTML = "";
   
    /*

    for (let index = 0; index < Historial.length; index++) {
      var li = document.createElement("li");

      var progresion = Historial[index].Grados[0] +" - "+ Historial[index].Grados[1] +" - "+ Historial[index].Grados[2] +" - "+ Historial[index].Grados[3];     
      li.appendChild(document.createTextNode(Historial[index].Root+" MINOR | "+progresion));
      var buttonP = document.createElement("button");
      var buttonD = document.createElement("button");
      buttonP.innerHTML = "";

      var i = document.createElement("i");
      i.className = "gg-play-button-o" 
      buttonP.className = "btn-play";
      buttonP.appendChild(i);


      
      buttonD.innerHTML = "";
      var i = document.createElement("i");
      var div = document.createElement("div");
      i.className = "gg-software-download" 
      buttonD.className = "btn-play";
      buttonD.appendChild(i);
      li.appendChild(buttonP);
      li.appendChild(buttonD);
      buttonP.onclick=function(){ Sonar(Historial[index])};
      buttonD.onclick=function(){DescargarMidi(Historial[index])};
      ul.appendChild(li);



    }*/


    
    for (let index = 0; index < Historial.length; index++) {
      var li = document.createElement("li");

      var progresion = Historial[index].Grados[0] +" - "+ Historial[index].Grados[1] +" - "+ Historial[index].Grados[2] +" - "+ Historial[index].Grados[3];     
      li.appendChild(document.createTextNode(Historial[index].Root+" MINOR | "+progresion));
      var buttonP = document.createElement("button");
      var buttonD = document.createElement("button");
      buttonP.innerHTML = "Play";



      var i = document.createElement("i");
      i.className = "gg-play-button-o" 
      buttonP.className = "btn-play";
      buttonP.appendChild(i);


      
      buttonD.innerHTML = "Descargar";
      var i = document.createElement("i");
      i.className = "gg-software-download" 
      buttonD.className = "btn-play";
      buttonD.appendChild(i);

      var divv = document.createElement("div");
      var divv2 = document.createElement("div");
      divv.className = "with-flex";

      divv.appendChild(buttonP);
      divv.appendChild(buttonD);

      divv.className = "div-play";
      divv2.className = "div-play";

      buttonP.onclick=function(){ Sonar(Historial[index])};
      buttonD.onclick=function(){DescargarMidi(Historial[index])};

      li.appendChild(divv);
      ul.appendChild(li);
      //ul.appendChild(divv);
      //ul.appendChild(divv2);



    }
   
   }
    
    function Generar(transponer=0) {
      
      let peticion = "https://chordgeneratormidi.herokuapp.com/api/v1";
      //let peticion = "http://127.0.0.1:5096/api/v1";


      //nos dira con un boleeano si el candado esta activado
      var lockraiz = document.getElementById("lock").checked;

      if (lockraiz){
        var transponer = document.querySelector('input[name="notaraiz"]:checked').value;
        }

      peticion += ("/" + transponer + "/0");
      //console.log(peticion);
      
     

      fetch(peticion)
      .then(res=> res.json())
      .then(response=>{
        //que pasara con el objeto
      //  console.log(response);

  
        Sonar(response); 
        AgregarAlHistorial(response)
        a = document.getElementById(response.Root);
        a.checked = true;
      
      })















    







      	  



    

      }





      function Sonar(Grados) {
        detener(Acorde1);
        detener(Acorde2);
        detener(Acorde3);
        detener(Acorde4);
       // console.log("sonando")
        document.getElementById('Acorde1').innerHTML = Grados.Grados[0];
        document.getElementById('Acorde2').innerHTML = Grados.Grados[1];
        document.getElementById('Acorde3').innerHTML = Grados.Grados[2];
        document.getElementById('Acorde4').innerHTML = Grados.Grados[3];                       
   


                  
               //cambiar cheked 
               /*
                let yesBtn = document.getElementById('tool-1');
                yesBtn.checked = true;
                

                Grados.Numeros[0].forEach(element => {
                  audio1= new Audio("/NotesWavs/"+element+".wav");
                  audio1.play();
                });
           */
          
                Acorde1 = setTimeout(()=>{
                  yesBtn = document.getElementById('tool-1');
                  yesBtn.checked = true;

                
                  Grados.Numeros[0].forEach(element => {
                    //audio1= new Audio("../NotesWavs/"+element+".wav");
                    audio1= new Audio("https://raw.githubusercontent.com/JoseAntillan/UrbanGrooveTest/main/NotesWavs/"+element+".wav");
               
                    audio1.play();
                  });
             
        
               
                },0);

                //primera rproduccion

                Acorde2 = setTimeout(()=>{
                  yesBtn = document.getElementById('tool-2');
                  yesBtn.checked = true;
               

                  Grados.Numeros[1].forEach(element => {
                    //audio1= new Audio("../NotesWavs/"+element+".wav");
                    audio1= new Audio("https://raw.githubusercontent.com/JoseAntillan/UrbanGrooveTest/main/NotesWavs/"+element+".wav");
                    audio1.play();
                  });
               
                },1000);

               
                Acorde3 = setTimeout(() => {
                  yesBtn = document.getElementById('tool-3');
                  yesBtn.checked = true;

                  Grados.Numeros[2].forEach(element => {
                    //let audio1= new Audio("../NotesWavs/"+element+".wav");
                    let audio1= new Audio("https://raw.githubusercontent.com/JoseAntillan/UrbanGrooveTest/main/NotesWavs/"+element+".wav");
                  
                    audio1.play();
                  });
               
               
                },2000);

                Acorde4 = setTimeout(() => {
                  yesBtn = document.getElementById('tool-4');
                  yesBtn.checked = true;

                  Grados.Numeros[3].forEach(element => {
                    //let audio1= new Audio("../NotesWavs/"+element+".wav");
                    let audio1= new Audio("https://raw.githubusercontent.com/JoseAntillan/UrbanGrooveTest/main/NotesWavs/"+element+".wav");
                    audio1.play();
                  });
                 
                },3000);

           

               

                        


      } 





  

      const Historial = [];
      


      function DescargarMidi(objetojson){

        

            // Create a MIDI file. Type 1; 100 clocks per quarter note.
            // Normally, it would rather be 96, but 100 makes it easier to count.
            var smf = new JZZ.MIDI.SMF(1, 100);
            
            // Add MIDI file tracks:
            var trk2 = new JZZ.MIDI.SMF.MTrk(); smf.push(trk2); // This one will be for the music
            

            

            
            
            trk2.smfSeqName('Music')
                .ch(0) // all subsequent messahes will go to channel 0
                .program(0x0b); // set channel 0 program to vibraphone



                //CREAR PRIMER ACODER

                for (let index = 0; index < objetojson.Acordes[0].length; index++) {
                 
                trk2.smfSeqName('Music')
                .ch(0) // all subsequent messahes will go to channel 0
                .program(0x0b).tick(0).note(objetojson.Acordes[0][index], 100, 200);
                  
                }
              

                //CREAR segundo ACODER
                for (let index = 0; index < objetojson.Acordes[1].length; index++) {
        
                trk2.smfSeqName('Music')
                .ch(0) // all subsequent messahes will go to channel 0
                .program(0x0b).tick(200).note(objetojson.Acordes[1][index], 100, 200);
                  
                }
            


                //CREAR tercer acorde
                for (let index = 0; index < objetojson.Acordes[2].length; index++) {
             
                trk2.smfSeqName('Music')
                .ch(0) // all subsequent messahes will go to channel 0
                .program(0x0b).tick(400).note(objetojson.Acordes[2][index], 100, 200);
                  
                }
            

                

                //CREAR tercer acorde
                for (let index = 0; index < objetojson.Acordes[3].length; index++) {
               
                trk2.smfSeqName('Music')
                .ch(0) // all subsequent messahes will go to channel 0
                .program(0x0b).tick(600).note(objetojson.Acordes[3][index], 100, 200);
                  
                }
              




             //FINALIZAR
             trk2.smfSeqName('Music')
            .ch(0) // all subsequent messahes will go to channel 0
            .program(0x0b).tick(100).smfEndOfTrack(); // otherwise it will end on clock 1690
                
            
            var str = smf.dump(); // MIDI file dumped as a string
            var b64 = JZZ.lib.toBase64(str); // convert to base-64 string
            var uri = 'data:audio/midi;base64,' + b64; // data URI
            // Finally, write it to the document as a link and as an embedded object:
            //document.getElementById('historial').innerHTML = 'New file: <a download=UrbanGroove.mid href=' + uri + '>DOWNLOAD</a> <embed src=' + uri ;
            
          /*
          document.getElementById('historial').innerHTML = "<a id='HOLA' href="+uri+" download="+"aaa"+">Download</a>";
          a = document.getElementById("HOLA");
          a.click();
          */  
  const a = document.createElement('a');
  a.href = uri;
  a.download = "UrbanGrooves";
  document.body.appendChild(a);
  a.click()
  document.body.removeChild(a);

         


      }


  


function detener(myTimeout){

  clearTimeout(myTimeout);

}


function OnLoad(){
//Generar();
console.log("pagina cargada");





}




