/*This is data about my data research on Colombian refugees*/
var Research_Title = "Colombian IDPs and Refugees";
/*Above var defines the title of my research*/

var Main_Current_Locations_of_Displaced_Colombians = ["IDPs Inside Colombia","Refugees in Ecuador","Refugees in Venezuela","Refugees in Canada","Refugees in Peru"];
/*Above var defines destinations of the population who are displaced due to Colombian crisis*/

var Total_Population = "7288004";
/*Above var is the official figue of displaced Colombians till the end of 2015 based on UNHCR's statistics'*/

var Solutions_History_and_Awards = {
"History":"Peace talks started in 2011",

"Domestic_Solution":["Peace talks between Colombian government and FARC","Peace talks with ELN"],
"FARC":"Revolutionary Armed Forces of Colombia",
"ELN":"National Liberation Army",
"Colombia President":{"name":"Juan Manuel Santos","achievement":"Peace deal with FARC","awards":"Nobel Peace Prize"},

"International_Solution":["UNHCR helped to relocate several hundred refugees in 2010",
"ASOPMICEO launched a micro-loan program which benefits both host communities and refugees"],
"ASOPMICEO":"A refugee organization in Lago Agrio",
};
/*Above is a var showing domestic and foreign efforts to solve displaced Colombia's population's problem*/

var Second_Global_IDP_Population = true;
/*Above is the var to define Columbia's global ranking in terms of IDP population*/

var News_Pieces = [{
"title":"",
"utl":"",
"image":"",
"summary":"",
},
{
"title":"",
"utl":"",
"image":"",
"summary":"",
},
];
console.log(Main_Current_Locations_of_Displaced_Colombians);
console.log(Solutions_History_and_Awards);
Main_Current_Locations_of_Displaced_Colombians[5]="Some European countries";
console.log(Main_Current_Locations_of_Displaced_Colombians);

var NewsPieces = [{
/* This var is a "list"" of objects; each of these objects is one of my articles, I names them . For now, I have four objects/articles. it may increase in the future. Each object/article which I named "NewsPiece", has six properties by now. */

"ArtcleTitle":"ایران چهل هزار دانشجوی افغانستانی را پرورش داده است",
/*ArtcleTitle's value is the name of the headline. Here the value is */

"Language":"Persian",
/*The article is from Farsnews, an Iranian official websites. It is from the Farsi version of this news agency.*/

"url":"http://www.farsnews.com/newstext.php?nn=13951105001514",
/*Above is the url link to the article in Farsnews.*/

"Date":"2017",
/*The publication date of this article in Farsnews in Christian calendar is January 24th 2017*/

"image":"http://media.farsnews.com/media/Uploaded/Files/Images/1395/08/07/13950807000248_PhotoA.jpg",
/*Above is the link to the picture associated with the article in Farsnews*/

"summary":"فارس: حجت‌الاسلام والمسلمین محمد صالحی: همچنین در حال حاضر بیش از 410 هزار دانش‌آموز افغانستانی در مدارس ایران تحصیل می‌کنند و این امر موجب شده که کودکان و نوجوانان پناهجو از تحصیل محروم نباش"
/*Unfortunately I did not access Farsi keyboard and copies and pasted the most part of the article in my summary section instead of paraphrasing. But I tried to put it in a way that shows it is taken from Fars*/
},

{
"ArtcleTitle":" نماینده کمیساریای عالی پناهندگان سازمان ملل در ایران دنیا نمی‌خواهد خدمات ایران به پناه‌جویان خارجی را ببیند",
/*ArtcleTitle's value is the name of the headline. Here the value is a quote from */

"Language":"Persian",
/*The article is from Farsnews, an Iranian official websites. It is from the Farsi version of this news agency.*/

"url":"http://www.farsnews.com/newstext.php?nn=13951109001910",
/*Above is the url link to the article in Farsnews.*/

"Date":"2017",
/*The publication date of this article in Farsnews in Christian calendar is January 28th 2017*/

"image":"http://media.farsnews.com/media/Uploaded/Files/Images/1395/11/09/13951109001636_PhotoA.jpg",
/*Above is the link to the picture associated with the article in Farsnews*/

"summary":"فارس: سی‌وان دانا پالا یادآور شد: از جمله شاخص‌ترین برنامه‌هایی که سبب تحسین مقامات کمیساریای عالی پناهندگان سازمان ملل در مورد ایران شده ارائه خدمات آموزشی، سلامت و بهداشت به پناهجویان فاقد مدارک هویتی و شناسایی درست است که خیلی محدود در دیگر کشورها به مانند ایران انجام می‌شود"
/*The summary quotes UNHCR's representative in Iran as Fars sayng that the high level of services that Iran provides refugees with in the field of healthcare can rarely be found in other countries.*/
},

{
"ArtcleTitle":"European Union reaches out to Iran over Afghan refugees",
/*ArtcleTitle's value is the name of the headline. Here the value is a quote from */

"Language":"English",
/*The article is from Rueters in English.*/

"url":"http://www.reuters.com/article/us-europe-migrants-iran-idUSKCN12Q27T",
/*Above is the url link to the article in Reuters.*/

"Date":"2016",
/*The publication date of this article is Oct 26, 2016*/

"image":"http://s3.reutersmedia.net/resources/r/?m=02&d=20161026&t=2&i=1159070668&w=&fh=&fw=&ll=780&pl=468&sq=&r=LYNXNPEC9P1C6",
/*Above is the link to the picture associated with the article in Rueters*/

"summary":"European countries found it a better solution to help Iran with financial aids to provide Afghan refugees with better offers in healthcare and education, so they stay in Iran rather than taking the rout to Europ."
/*This is probably the most important part of the story*/
},

{
"ArtcleTitle":"Anywhere but home: an Afghan labourer in Iran dreams of life in Sweden",
/*ArtcleTitle's value is the name of the headline. Here the value is a quote from */

"Language":"English",
/*The article is from Guardian in English.*/

"url":"https://www.theguardian.com/world/iran-blog/2016/feb/03/afghan-refugees-iran-greece-sweden",
/*Above is the url link to the article in Farsnews.*/

"Date":"2016",
/*The publication date of this article is Fabruary 3 2016*/

"image":"https://i.guim.co.uk/img/media/c9ce9438b305eaef790649938e73af2203b7cf08/0_0_3022_3022/master/3022.jpg?w=620&q=55&auto=format&usm=12&fit=max&s=f15e0cda7bf8bce2283d4ce8e7ff817f",
/*Above is the link to the picture associated with the article in Guardian*/

"summary":"Despite of European countries financial aid to Iran to improve Afghan refugees' living conditions, the will to have a better life keeps Afghans leaving Iran to Europe. The financial aid that Europe has send to Iran is not considerable comparing to its help to Turkey."
/*This is a very short version of the article.*/
	},

	];

	function PersianNewsPieces(ListOfNewsPieces) {

		/* Goal: This is to go through my list of NewsPieces and console log only the ones that are in Persian. So, to go through the list, I created a for loop*/

		for (var counter = 0; counter < ListOfNewsPieces.length; counter++) {

			/* The loop will check each single objects and if the roperty of language is Persian, it keeps counting them adding up from 0. It will always keep the total number of Persian NewsPieces less than the total number of all of my articles.*/

			var MyArticleLanguage = (ListOfNewsPieces[counter]);
			/*This variable helps me to define the language of my news pieces to the computer.*/

			if (MyArticleLanguage.Language == "Persian") {
				/*Through this condition I command that if the language which I have defined for my piece as a property is Persian, it has to be counted in the console.log and added up to my Persian Language news piecesthat I have defined through the above var. (I hope I have understand it properly.) */

				console.log(MyArticleLanguage);
				/*This line would help the machine to send the report to the console, so I can see the number of the articles in Persian language.*/
			} 
			else {
				console.log("English")
			}
			/*This else command helps in labeling any var which does not match the Persian language defined in if command to get the lable of English, which is the only other language of the articles published in this website.*/

		}

	}
	/*Call my PersianNewsPieces function*/
	console.log("Succesfully done!")
	PersianNewsPieces(NewsPieces); 