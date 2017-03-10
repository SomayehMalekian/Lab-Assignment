/**
 * @author Somayeh Malekian
 */
// Folloing is the command to tell HTML to load the Visualization API and the corechart package we got from google library.
google.charts.load('current', {
	'packages' : ['corechart']
});
/*As it might some time from the machine to get connected to the libary and bring us data,
 * we need to set a callback to run when the Google Visualization API is loaded*/

/* Following is the line of command which sets the callback which makes a data table,
 *  illustrates the bar chart, puts the data in it and
 * draws it*/
google.charts.setOnLoadCallback(DrawAllMyCharts);

/*Following is the function to keep on drawing multiple charts instread of asking google draw each single chart */
function DrawAllMyCharts() {
	drawMyChart1();
	drawMyChart2();
}

/*Following is the function through which we costumize our own set of
 *data, which here in this case is the amount of money
 * that UNHCR allocated to Colombian IDPs and refugees from 2010 to 2015.
 * We'll illustration this data set in the form of a bar chart by using the DataTable recipe*/

function drawMyChart1() {
	var stat_sack = new google.visualization.DataTable();

	/*With the following command, I add a column of type string, labled "Year" to show related which year each bar represents*/
	stat_sack.addColumn('string', 'Year');

	/*Through the following command, I add a column of type string, labled "Tortal Budget". The stat here will show the value on y axis in my chart,
	 * showing the budget allocated to displaced Colombians in the related year.*/
	stat_sack.addColumn('number', 'Total Budget');

	/* My rows must be a list of lists, with each item in the list
	 * having the same number of elements as I have columns
	 * AND with the data types matching those that were declared
	 * in my "addColumn" function calls.*/

	var drawMyChart1 = [['2010', 31000000], ['2011', 34000000], ['2012', 29000000], ['2013', 30000000], ['2014', 29000000], ['2015', 32000000]];

	stat_sack.addRows(drawMyChart1);

	/*The following variable will be an object that can include any property we want our visulization have including
	 * a title, width and highth, background color, etc.*/
	var my_chart_options = {
		'title' : 'Budget that UNHCR allocated in total to displaced Colombians, IDPs and refugees, from 2010 to 2015 Comment: The budget from July till the end of December',
		'width' : 600,
		'height' : 700,
		'backgroundColor' : '#eeeeee',
		'bar' : {
			'groupWidth' : 20
		}
	}

	/*QUESTION: I don't know how to add comment within my bar chart. If you remember, the stat for 2013 was as of July of the related year.
	* I need to explain it within the chart as you had commented in my redesign assignment but I didn't know how,
	* so I just continued my title for now and wrote a comment within the title which I am sure is not the way to do it.*/

	// Instantiate and draw our chart, passing in some options.
	var UNHCR_budget_allocation_colombia = new google.visualization.ColumnChart(document.getElementById('chart_frame1'));
	UNHCR_budget_allocation_colombia.draw(stat_sack, my_chart_options);

}
	/*Function name........ draw"My"Chart*/ 
function drawMyChart2() {
	var stat_sack = new google.visualization.DataTable();

	/*With the following command, I add a column of type string, labled "funded or gap" to define slices of my pie chart which represent
	 * two conditions of the money needed for taking care of refugees in iran, a part is paid by UNHCR which is named "funded" and
	 * a part is remained uncovered which is named gap*/
	stat_sack.addColumn('string', 'funded or gap');

	/*Through the following command, I add a column of type string, which is a number and is labled "Tortal Budget". The stat here will to show
	 * the proportion of the budget which is funded by UNHCR to Iran vs. the amount that is remained uncovered*/
	stat_sack.addColumn('number', 'Budget');

	/* Add a column to my chart*/
	stat_sack.addColumn(data.addColumn({type : 'string', role : 'annotation'}))

	/* My rows must be a list of lists, with each item in the list
	 * having the same number of elements as I have columns
	 * AND with the data types matching those that were declared
	 * in my "addColumn" function calls.*/
	stat_sack.addRows([['Funded', 5790000], ['Gap', 64870000]]);

	/*The following variable will be an object that can include any property we want our visulization have including
	 * a title, width and highth, background color, etc.*/
	var my_chart_options = {
		'title' : 'Proportion of UNHCR budget allocation in Iran / Total requested budget was $70.66 million.',
		'width' : 600,
		'height' : 700,
		'backgroundColor' : '#eeeeee'
	}
	//QUESTION: I am looking forward to learn how I can add notes inside of my visualizations...//

	// Instantiate and draw our chart, passing in some options.
	var UNHCR_budget_allocation_colombia = new google.visualization.PieChart(document.getElementById('chart_frame2'));
	UNHCR_budget_allocation_colombia.draw(stat_sack, my_chart_options);

}