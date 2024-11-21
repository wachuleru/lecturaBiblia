
let books =[];
let at=0;
let nt=0;
let atL=0;
let ntL=0;
let fechaInicio;
function getBooksRead(){
    let nodata= [{
        leidos: 0,
        nombre: "Genesis",
        testamento: "Antiguo Testamento",
        total: 50,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Exodo",
        testamento: "Antiguo Testamento",
        total: 40,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Levitico",
        testamento: "Antiguo Testamento",
        total: 27,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Numeros",
        testamento: "Antiguo Testamento",
        total: 36,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Deuteronomio",
        testamento: "Antiguo Testamento",
        total: 34,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Josue",
        testamento: "Antiguo Testamento",
        total: 24,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Jueces",
        testamento: "Antiguo Testamento",
        total: 21,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Rut",
        testamento: "Antiguo Testamento",
        total: 4,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "1-Samuel",
        testamento: "Antiguo Testamento",
        total: 31,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "2-Samuel",
        testamento: "Antiguo Testamento",
        total: 24,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "1-Reyes",
        testamento: "Antiguo Testamento",
        total: 22,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "2-Reyes",
        testamento: "Antiguo Testamento",
        total: 25,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "1-Cronicas",
        testamento: "Antiguo Testamento",
        total: 29,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "2-Cronicas",
        testamento: "Antiguo Testamento",
        total: 36,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Esdras",
        testamento: "Antiguo Testamento",
        total: 10,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Nehemias",
        testamento: "Antiguo Testamento",
        total: 13,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Ester",
        testamento: "Antiguo Testamento",
        total: 10,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Job",
        testamento: "Antiguo Testamento",
        total: 42,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Salmos",
        testamento: "Antiguo Testamento",
        total: 150,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Proverbios",
        testamento: "Antiguo Testamento",
        total: 31,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Eclesiastes",
        testamento: "Antiguo Testamento",
        total: 12,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Cantares",
        testamento: "Antiguo Testamento",
        total: 8,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Isaias",
        testamento: "Antiguo Testamento",
        total: 66,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Jeremias",
        testamento: "Antiguo Testamento",
        total: 52,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Lamentaciones",
        testamento: "Antiguo Testamento",
        total: 5,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Ezequiel",
        testamento: "Antiguo Testamento",
        total: 48,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Daniel",
        testamento: "Antiguo Testamento",
        total: 12,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Oseas",
        testamento: "Antiguo Testamento",
        total: 14,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Joel",
        testamento: "Antiguo Testamento",
        total: 3,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Amos",
        testamento: "Antiguo Testamento",
        total: 9,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Abdias",
        testamento: "Antiguo Testamento",
        total: 1,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Jonas",
        testamento: "Antiguo Testamento",
        total: 4,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Miqueas",
        testamento: "Antiguo Testamento",
        total: 7,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Nahum",
        testamento: "Antiguo Testamento",
        total: 3,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Habacuc",
        testamento: "Antiguo Testamento",
        total: 3,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Sofonias",
        testamento: "Antiguo Testamento",
        total: 3,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Hageo",
        testamento: "Antiguo Testamento",
        total: 2,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Zacarias",
        testamento: "Antiguo Testamento",
        total: 14,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Malaquias",
        testamento: "Antiguo Testamento",
        total: 4,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Mateo",
        testamento: "Nuevo Testamento",
        total: 28,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Marcos",
        testamento: "Nuevo Testamento",
        total: 16,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Lucas",
        testamento: "Nuevo Testamento",
        total: 24,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Juan",
        testamento: "Nuevo Testamento",
        total: 21,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Hechos",
        testamento: "Nuevo Testamento",
        total: 28,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Romanos",
        testamento: "Nuevo Testamento",
        total: 16,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "1-Corintios",
        testamento: "Nuevo Testamento",
        total: 16,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "2-Corintios",
        testamento: "Nuevo Testamento",
        total: 13,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Galatas",
        testamento: "Nuevo Testamento",
        total: 6,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Efesios",
        testamento: "Nuevo Testamento",
        total: 6,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Filipenses",
        testamento: "Nuevo Testamento",
        total: 4,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Colosenses",
        testamento: "Nuevo Testamento",
        total: 4,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "1-Tesalonicenses",
        testamento: "Nuevo Testamento",
        total: 5,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "2-Tesalonicenses",
        testamento: "Nuevo Testamento",
        total: 3,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "1-Timoteo",
        testamento: "Nuevo Testamento",
        total: 6,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "2-Timoteo",
        testamento: "Nuevo Testamento",
        total: 4,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Tito",
        testamento: "Nuevo Testamento",
        total: 3,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Filemon",
        testamento: "Nuevo Testamento",
        total: 1,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Hebreos",
        testamento: "Nuevo Testamento",
        total: 13,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Santiago",
        testamento: "Nuevo Testamento",
        total: 5,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "1-Pedro",
        testamento: "Nuevo Testamento",
        total: 5,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "2-Pedro",
        testamento: "Nuevo Testamento",
        total: 3,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "1-Juan",
        testamento: "Nuevo Testamento",
        total: 5,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "2-Juan",
        testamento: "Nuevo Testamento",
        total: 1,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "3-Juan",
        testamento: "Nuevo Testamento",
        total: 1,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Judas",
        testamento: "Nuevo Testamento",
        total: 1,
        favoritos:[]
        }, {
        leidos: 0,
        nombre: "Apocalipsis",
        testamento: "Nuevo Testamento",
        total: 22,
        favoritos:[]
        }];
    if (typeof(Storage) !== "undefined") {
        let data= localStorage.getItem("Books");
        console.log('data',data)
        if(data){
          
            books=JSON.parse(data);
            console.log('books',books)

        }else{
            books=nodata;
        }
        let dataF= localStorage.getItem("fecha");
        if(dataF){
            console.log('lsFecha',dataF)
            fechaInicio=(dataF);
            
        }else{
            let hoy=new Date();
            hoy.setHours(0);
            hoy.setMinutes(0);
            fechaInicio=hoy;
        }
    } else {
        let hoy=new Date();
        hoy.setHours(0);
        hoy.setMinutes(0);
        fechaInicio=hoy;
        books=nodata;
    }
    console.log('fechacargada',fechaInicio)
    document.getElementById('fecha').value=fechaInicio
    let indicadorTestamento=[];
    let checkBoxAT = ``;
    let checkBoxNT = ``;
    books.forEach(element => {
        let lib= `
            <div class="col-2 mt-2 mb-2">
                <div class="card">
                    <div class="card-header">${element.nombre}</div>
                    <input type="range" class="form-range" min="0" max="${element.total}" value="${element.leidos}" step="1" id="${element.nombre}" onchange="updateTextInput('${element.nombre}',this.value,${element.total});">
                    <p class ="text-end me-3" id="${element.nombre}Value" > ${element.leidos}/${element.total} </p>
                    <button class="btn btn-success" onClick="agregarFav('${element.nombre}',${element.total})">Agregar Favs</button>
                    <button class="btn btn-info" onClick="showFavs('${element.nombre}')">Ver Favs</button>
                </div>
            </div>`;
        if(element.testamento=='Antiguo Testamento'){
            checkBoxAT += lib;
        }
        if(element.testamento=='Nuevo Testamento'){
            checkBoxNT += lib;
        }
        
    });
    let AT= document.getElementById('AT');
    AT.innerHTML=checkBoxAT;
    let NT= document.getElementById('NT');
    NT.innerHTML=checkBoxNT;
    calcProm()
}
async function getBooksDetail(){
    const resp = await fetch("https://bible-api.deno.dev/api/books/")

    const data = await resp.json()
    console.log(data);
}

function updateTextInput(inp,val,tot) {
    console.log(inp);
    let input = inp+'Value';
    console.log(input);
    document.getElementById(input).innerText=val+'/'+tot;
    let libro=books.find(e => e.nombre==inp);
    if(libro){
        libro.leidos=val;
    }
    getIndicadores();
    saveAll()
}

function getIndicadores(){
    
    at=0;
    atL=0;
    nt=0;
    ntL=0;
    books.forEach(e =>{
        if(e.testamento=='Antiguo Testamento'){
            at+=parseInt(e.total);
            atL+=parseInt(e.leidos);
        }
        if(e.testamento=='Nuevo Testamento'){
            nt+=parseInt(e.total);
            ntL+=parseInt(e.leidos);
        }
    })
    console.log('at',at);    console.log('atL',atL);
    console.log('nt',nt);    console.log('ntL',ntL);

    graficar()
    calcProm();
}

function renderIcons() {

    this.series.forEach(series => {
         if (!series.icon) {
             series.icon = this.renderer
                 .text(
                     `<i class="fa fa-${series.options.custom.icon}"></i>`,
                     0,
                     0,
                     true
                 )
                 .attr({
                     zIndex: 10
                 })
                 .css({
                     color: series.options.custom.iconColor,
                     fontSize: '1.5em'
                 })
                 .add(this.series[2].group);
         }
         series.icon.attr({
             x: this.chartWidth / 2 - 15,
             y: this.plotHeight / 2 -
                 series.points[0].shapeArgs.innerR -
                 (
                     series.points[0].shapeArgs.r -
                     series.points[0].shapeArgs.innerR
                 ) / 2 +
                 8
         });
     }); 
 }
 const colores = ['#FA114F','#92E82A','#1EEAEF']
 const trackColors = colores.map(color =>
     new Highcharts.Color(color).setOpacity(0.7).get()
 );
 function graficar(){
    Highcharts.chart('avance', {
 
        chart: {
            type: 'solidgauge',
            height: '400px',
            backgroundColor:'none',
            events: {
                render: renderIcons
            },
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Lectura Biblia',
            style: {
                fontSize: '24px',
                color: '#FFFFFF'
            }
        },
    
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            valueSuffix: '%',
            pointFormat: '<b  style="color: {point.color}; ">{series.name}</b><br>' +
                '<span style="font-size: 2em; color: {point.color}; ' +
                'font-weight: bold ;">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2) + 15
                };
            }
        },
    
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Conversion
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: trackColors[0],
                borderWidth: 0
            }, { // Track for Engagement
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: trackColors[1],
                borderWidth: 0
            }, { // Track for Feedback
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: trackColors[2],
                borderWidth: 0
            }]
        },
    
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
    
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },
    
        series: [{
            name: 'Total',
            data: [{
                color:colores[0],
                radius: '112%',
                innerRadius: '88%',
                y: Math.round((((atL+ntL)/(at+nt))*100))
            }],
            custom: {
                icon: 'filter',
                iconColor: '#303030'
            }
        }, {
            name: 'AT',
            data: [{
                color: colores[1],
                radius: '87%',
                innerRadius: '63%',
                y: Math.round(((atL/at)*100))
            }],
            custom: {
                icon: 'comments-o',
                iconColor: '#ffffff'
            }
        }, {
            name: 'NT',
            data: [{
                color: colores[2],
                radius: '62%',
                innerRadius: '38%',
                y: Math.round(((ntL/nt)*100))
            }],
            custom: {
                icon: 'commenting-o',
                iconColor: '#303030'
            }
        }]
    });
 }
 function calcProm(){
    let hoy=new Date();
    hoy.setHours(0);
    hoy.setMinutes(0);
    let Difference_In_Time=0;
    let Difference_In_Days=0;
    let fecha=new Date(fechaInicio);
    Difference_In_Time =hoy.getTime() - fecha.getTime();
    console.log('hoy',hoy.getTime())
    console.log('fechaInicio',fecha.getTime())
    Difference_In_Days =Math.round(Difference_In_Time / (1000 * 3600 * 24));
    console.log('total',(atL+ntL));
    console.log('Difference_In_Days',Difference_In_Days)
    document.getElementById('prom').innerText=Math.round((atL+ntL)/Difference_In_Days)
 }
 function promedioAlDia(){
    let fecha= document.getElementById('fecha').value;
    fechaInicio=fecha;
    let aux= fecha.split('-');
    console.log(aux[2]+'/'+aux[1]+'/'+aux[0])
    let fecha2= new Date(fecha);
    let hoy=new Date();
    hoy.setHours(0);
    hoy.setMinutes(0);
    
    let Difference_In_Time=0;
    let Difference_In_Days=0;
    if(hoy< fecha2){
        alert('La fecha de inicio debe ser hoy o anterior.')
        
    }else{
        Difference_In_Time =hoy.getTime() - fecha2.getTime();
        console.log('hoy',hoy.getTime())
        console.log('fecha2',fecha2.getTime())
        Difference_In_Days =Math.round(Difference_In_Time / (1000 * 3600 * 24));
    }
    console.log(fecha2,hoy);
    console.log(Difference_In_Days);
    
    document.getElementById('prom').innerText=Math.round((atL+ntL)/Difference_In_Days)
    saveAll()
 }

 function datediff(first, second) {        
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
}

function saveAll(){
    localStorage.setItem("Books", JSON.stringify(books));
    localStorage.setItem("fecha", fechaInicio);
}
let libro;
let cap;
let vers;
function agregarFav(lib,total){
    libro=lib;
    console.log(libro)
    document.getElementById('libro').innerText=libro;
    document.getElementById('cap').max=total;
    document.getElementById('cap').value=1;
    document.getElementById('vers').value=1;
    document.getElementById('nota').value='';
    document.getElementById('versiculoBuscado').innerText='';
    const modalPlayers = new bootstrap.Modal("#favs");
    modalPlayers.show();
}

async function guardarFav(){
    let cap = document.getElementById('cap').value;
    let vers = document.getElementById('vers').value;
    let note = document.getElementById('nota').value;

    let lib = books.find(e =>e.nombre==libro);
    let versiculo = await getCita(libro,cap,vers);
    let cita=libro+" "+cap+":"+vers;
    let tiene;
    if(lib.favoritos.length >0){
        tiene=lib.favoritos.find(f=> f.cita==cita);
    }
    
    if(!tiene){
        if(versiculo){
            let ver ='';
            if(Array.isArray(versiculo)){
                versiculo.forEach(v=>{
                    ver+=ver.length?(" "+v.number+" ."+v.verse):(v.number+" ."+v.verse)
                })
            }else{
                ver=versiculo.number+". "+versiculo.verse;
            }
            
            lib.favoritos.push({cita: cita, detalle: ver, nota:note});
        }
        saveAll();
    }
    const toastLiveExample = document.getElementById("favs");
    const toastBootstrap = bootstrap.Modal.getInstance("#favs");
    toastBootstrap.hide()
    console.log('lib',lib);

}
async function buscarCita(){
    document.getElementById('cargando').classList.toggle('visually-hidden');
    let libro=document.getElementById('libro').innerText
    let cap=document.getElementById('cap').value
    let vers=document.getElementById('vers').value
    let versiculo= await getCita(libro,cap,vers);
    let ver ='';
    
    if(versiculo){
        
        if(Array.isArray(versiculo)){
            versiculo.forEach(v=>{
                ver+=ver.length?(" "+v.number+" ."+v.verse):(v.number+" ."+v.verse)
            })
        }else{
            ver=versiculo.number+". "+versiculo.verse;
        }
        document.getElementById('versiculoBuscado').innerText=ver;
        document.getElementById('cargando').classList.toggle('visually-hidden');
    }
    
    
}
async function getCita(libro,cap,vers){
    console.log('endpoint',"https://bible-api.deno.dev/api/read/rv1960/"+libro+"/"+cap+"/"+vers);
    const resp = await fetch("https://bible-api.deno.dev/api/read/rv1960/"+libro+"/"+cap+"/"+vers);

    const data = await resp.json()
    let ret;
    console.log( data.length);
    //if(typeof data)
    if(data){
        
        
        return data;
    }
    
}
function getFavs(l){
    let lf = books.find(b=>b.nombre==l);
    let ret=``;
    if(lf.favoritos.length>0){
        lf.favoritos.forEach(c=>{
            ret+=`<div class="card">
                <div class="card-body">
                    <p>${c.detalle}</p>
                    <b>${c.cita}</b>
                    <p>Nota: <i>${c.nota}</i></p>
                    <button class="btn btn-primary" onclick="editar('${lf.nombre}','${c.cita}')"><i class="bi bi-pencil"></i></button>
                    <button class="btn btn-danger" onclick="eliminar('${lf.nombre}','${c.cita}')"><i class="bi bi-trash"></i></button>
                </div>
            </div>`
        })
        
    }
    document.getElementById('vfavs').innerHTML=ret;
}
let libroEdit='';
let citaEdit='';
let notaEdit='';
function editar(l,c){
    console.log(l,c);
    libroEdit=l;
    citaEdit=c;
    let lib = books.find(b=>b.nombre==l);
    let favs= lib.favoritos;
    let edit=favs.find(f=>f.cita==c);
    document.getElementById('vv').innerText=edit.detalle;
    document.getElementById('cc').innerText= edit.cita;
    document.getElementById('notaEdit').value=edit.nota;
    const toastBootstrap = bootstrap.Modal.getInstance("#editFavsModal");
    toastBootstrap.show()
}
function editFav(){
    let lib = books.find(b=>b.nombre==libroEdit);
    let favs= lib.favoritos;
    let edit=favs.find(f=>f.cita==citaEdit);
    let note = document.getElementById('notaEdit').value;
    edit.nota=note;
    const toastBootstrap = bootstrap.Modal.getInstance("#editFavsModal");
    toastBootstrap.hide()
    getFavs(libroEdit);
    saveAll()
}
function eliminar(l,c){
    console.log(l,c);
    let lib = books.find(b=>b.nombre==l);
    let favs= lib.favoritos;
    let del=favs.filter(f=>f.cita!=c);
    lib.favoritos=del;
    console.log(lib);
    getFavs(l);
    saveAll();
}
function showFavs(l){
    document.getElementById('flib').innerText=l;
    console.log('entramos')
    getFavs(l);
    console.log('continuamos')
    const toastBootstrap = bootstrap.Modal.getInstance("#showFavsModal");
    toastBootstrap.show()
}
const m1 = new bootstrap.Modal('#showFavsModal');
const m2 = new bootstrap.Modal('#favs');
const m4 = new bootstrap.Modal('#editFavsModal');
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
getBooksRead();
getIndicadores();