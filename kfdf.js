
/**
- dodaj nowy element [szafka, szuflada, półka]
-> zaciemnić obecny blok / odsunąć na bok?
-> wygenerować nowy blok / złożyć z elementów?
-> wyśrodkować

zdarzenia Edycji
- otwieranie drzwi
- oglądanie modelu 3d
- edycja modelu
	= zmiana wymiarów
	= zmiana materiału
	= zmiana modelu
	= Dodanie Elementu
	= Zmiana Elementu
	
	
jeśli chce edytować szafke
szafka => / bok / wieniec / drzwi
uchwyty, nogi, 



*/
var inne;
inne = {
    'prowadnice':[],
    'uchwyty':{'list':{'kulka':{callback:function(e){/*HELO*/}}, 'rączka':[]}, callback:function(e){} },
    'magnesy - drzwi':[],
    'listwy':[],
    'okleina':{'list':{'kulka':[], 'rączka':[]} },
    'haki do wieszania szafek':[],
    'stopki':[],
    'zawiasy':[],
    'rura na ubrania':[]
	
};

const bryly = {
'list':{
    'szafka':	{'list':inne, 'elementy':['bok','bok','wieniec','wieniec'], 'callback':function(e){alert(e);} },
    'szuflada':	{'list':inne },
    'cokoły':	{'list':inne }
	},
	'callback':'kfdf3d_clickButton'
};

const formatki = [
    'polka',
    'drzwi',
    'blat',
    'cokoly',
    'wieniec',
    'boki'
];

const element = {
  'typ':'',
  'color':'',
  'wymiar': { x:0, y:0, z:0 },
  'slojowanie':'',
  dlygosc: { 'minimalny':0, 'alarmujacy':0, 'maksymalny':0 }
};

var tablica = {
	listaElementow:[],
	'funkcja': ()=>{},
	
}
