render(list);
function render(viz_list) {
  if (!viz_list.length) return;

  var viz = d3
    .select('.projects')
    .selectAll('.viz')
    .data(viz_list, function(d) {
      return d.id;
    })
    .enter()
    .insert('li', 'br')
    .attr('class', 'viz caption')
    //.text(function(d) { return d.title; })
    .append('a')
    .attr('href', function(d) {
      var url = '//bnamita.github.io/' + d.name; //blog links
      if (d.name === 'OpenWaterDataApp') {
        url = 'https://water-data-web-app.appspot.com/';
      }
      return url;
    })
    .append('img')
    .attr('title', function(d) {
      return d.title;
    })
    .attr('src', function(d) {
      return 'css/images/' + d.name + '.png';
    })
    .attr('class', 'viz viz--thumbnail')
    .attr('href', function(d) {
      //return '//bnamita.github.io/' + d.name;
      var url = '//bnamita.github.io/' + d.name; //blog links
      if (d.name === 'OpenWaterDataApp') {
        url = 'https://water-data-web-app.appspot.com/';
      }
      return url;
    })
    .attr('target', '_blank');

  //.style("background-image", function(d) { return "url(css/images/" + d.name + ".png)"; })
  //.append("span")
  //.attr("class", 'viz_name')
  //.text(function(d) { return d.title; })

  //.enter().insert("a", "br")
  //.text(function(d) {
  //    return d.title;
  //});
  d3
    .select('.projects')
    .selectAll('.viz')
    .append('div')
    .attr('class', 'caption__overlay')
    .append('p')
    .attr('class', 'caption__overlay__content')
    .html(function(d) {
      var url = '//bnamita.github.io/' + d.name;
      if (d.name === 'OpenWaterDataApp') {
        url = 'https://water-data-web-app.appspot.com/';
      }

      return (
        d.desc +
        ' <br><br><a style="text-decoration: underline;" target="_blank" href="' +
        url +
        '"> View Interactive Visualization</a>'
      );
    });

  d3
    .select('.projects')
    .selectAll('.viz')
    .append('span')
    .attr('class', 'viz-title')
    .text(function(d) {
      return d.title;
    })
    .append('br');

  d3
    .select('.projects')
    .selectAll('.viz')
    .append('span')
    .attr('class', 'viz-tech')
    .html(function(d) {
      return d.tech;
    });
}

function render_single(viz_list, elem) {
  if (!viz_list.length) return;

  var viz = d3
    .select('.' + elem)
    .selectAll('.viz')
    .data(viz_list, function(d) {
      return d.id;
    })
    .enter()
    .insert('a', 'br')
    .attr('class', 'viz viz--thumbnail--large')
    .attr('href', function(d) {
      return '//bnamita.github.io/' + d.name;
    }) //blog links
    .attr('target', '_blank')
    .style('background-image', function(d) {
      return 'url(css/images/' + d.name + '.png)';
    });

  //viz.append("div")
  //    .attr("class", "viz-title")
  //    .text(function(d) { return d.title; });
}

$(document).ready(function() {
  $('ul li a').on('mouseover', function() {
    //$(".active").removeClass('active');
    //$(this).attr('border-bottom','1px solid red');
  });
});
