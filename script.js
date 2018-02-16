
/*
public class Example {
    public static void main(String[] args) {
        PokeApi pokeApi = new PokeApiClient();
        PokemonSpecies bulbasaur = pokeApi.getPokemonSpecies(1);
        System.out.println(bulbasaur);
    }
}

{
    "id": 12,
    "name": "butterfree",
    "base_experience": 178,
    "height": 11,
    "is_default": true,
    "order": 16,
    "weight": 320,
    "abilities": [{
        "is_hidden": true,
        "slot": 3,
        "ability": {
            "name": "tinted-lens",
            "url": "http://pokeapi.co/api/v2/ability/110/"
        }
    }],
    "forms": [{
        "name": "butterfree",
        "url": "http://pokeapi.co/api/v2/pokemon-form/12/"
    }],
    "game_indices": [{
        "game_index": 12,
        "version": {
            "name": "white-2",
            "url": "http://pokeapi.co/api/v2/version/22/"
        }
    }],
    "held_items": [{
        "item": {
            "name": "silver-powder",
            "url": "http://pokeapi.co/api/v2/item/199/"
        },
        "version_details": [{
            "rarity": 5,
            "version": {
                "name": "y",
                "url": "http://pokeapi.co/api/v2/version/24/"
            }
        }]
    }],
    "location_area_encounters": [{
        "location_area": {
            "name": "kanto-route-2-south-towards-viridian-city",
            "url": "http://pokeapi.co/api/v2/location-area/296/"
        },
        "version_details": [{
            "max_chance": 10,
            "encounter_details": [{
                "min_level": 7,
                "max_level": 7,
                "condition_values": [{
                    "name": "time-morning",
                    "url": "http://pokeapi.co/api/v2/encounter-condition-value/3/"
                }],
                "chance": 5,
                "method": {
                    "name": "walk",
                    "url": "http://pokeapi.co/api/v2/encounter-method/1/"
                }
            }],
            "version": {
                "name": "heartgold",
                "url": "http://pokeapi.co/api/v2/version/15/"
            }
        }]
    }],
    "moves": [{
        "move": {
            "name": "flash",
            "url": "http://pokeapi.co/api/v2/move/148/"
        },
        "version_group_details": [{
            "level_learned_at": 0,
            "version_group": {
                "name": "x-y",
                "url": "http://pokeapi.co/api/v2/version-group/15/"
            },
            "move_learn_method": {
                "name": "machine",
                "url": "http://pokeapi.co/api/v2/move-learn-method/4/"
            }
        }]
    }],
    "species": {
        "name": "butterfree",
        "url": "http://pokeapi.co/api/v2/pokemon-species/12/"
    },
    "sprites": {
        "back_female": "http://pokeapi.co/media/sprites/pokemon/back/female/12.png",
        "back_shiny_female": "http://pokeapi.co/media/sprites/pokemon/back/shiny/female/12.png",
        "back_default": "http://pokeapi.co/media/sprites/pokemon/back/12.png",
        "front_female": "http://pokeapi.co/media/sprites/pokemon/female/12.png",
        "front_shiny_female": "http://pokeapi.co/media/sprites/pokemon/shiny/female/12.png",
        "back_shiny": "http://pokeapi.co/media/sprites/pokemon/back/shiny/12.png",
        "front_default": "http://pokeapi.co/media/sprites/pokemon/12.png",
        "front_shiny": "http://pokeapi.co/media/sprites/pokemon/shiny/12.png"
    },
    "stats": [{
        "base_stat": 70,
        "effort": 0,
        "stat": {
            "name": "speed",
            "url": "http://pokeapi.co/api/v2/stat/6/"
        }
    }],
    "types": [{
        "slot": 2,
        "type": {
            "name": "flying",
            "url": "http://pokeapi.co/api/v2/type/3/"
        }
    }]
}
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex(); */
/*WEATHER */
$( ".type" ).mouseenter(function() {
    $( this ).animate({boxShadow: '0 0 30px #333'}, 200 );
});
$( ".type" ).mouseleave(function() {
    $( this ).animate({boxShadow: '0 0 0 #000000'}, 200 );
});
function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function BraceToSpace(string) {
    return string.replace(/-/g, " ");
}
function SpaceToBrace(string) {
    return string.replace(/ /g, "-");
}

$(document).ready(function() {

   var submitButton = $("#pokemonSubmit");
   var pokemonResults = document.getElementById("pokemonResults");
   console.log(submitButton);
   $("#pokemonSubmit").click(function(e) {
        $('.pokeball').show();
        $('.pokeball__button').show();
        e.preventDefault();
        /*var form = $("#pokemonForm").val(); */
        var form = "pokemon";
        var value = $("#pokemonInput").val();
        var myurl = "https://pokeapi.co/api/v2/" + form + "/" + value + "/";
        /*
        */
        $.ajax({
          /* */
            url : myurl,
            dataType : "json",
           beforeSend: function(){
                $('.pokeball').show();
                $('.pokeball__button').show();
            },

            success : function(json) {
            var results = "";
            console.log(json);
            if (form === "pokemon") {
              var name = json.name;
              name = jsUcfirst(name);
              results += "<h2 class='poke-name' id='its-name'>" + name
                + ":</h2><br>" + "<h2 class='type " + json.types[0].type.name + "'>" + jsUcfirst(json.types[0].type.name) +" </h2>";
              if (json.types.length > 1) {
                for (var i = 0; i < json.types.length - 1; ++i) {
                  results += "<h2 class='type " + json.types[i + 1].type.name + "'>" + jsUcfirst(json.types[i + 1].type.name) + " </h2>";
                }
              }
              var moves = "<p class = 'moves'><br>";
              for (var i = 0; i < 4; ++i) {
                moves +=i + 1 + ":";
                moves += BraceToSpace(jsUcfirst(json.moves[i].move.name));
                moves += "<br>";
              }
              moves += "</p>";
              results += moves;
              results += "<p class='right-side'>";
              results += '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + value + '.png" class="pokeSprities"/>';
              results += "</p>";
            }
            $("#pokemonResults").html(results);
          },
          complete:function(){
              $('.pokeball').hide();
              $('.pokeball__button').hide();
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          alert("No Pok\xE9mon found");
        });

   });
});
$(document).ready(function() {
   var submitButton = $("#itemSubmit");
   console.log(submitButton);
   $("#itemSubmit").click(function(e) {
        $('.pokeball').show();
        $('.pokeball__button').show();
        e.preventDefault();
        /*var form = $("#pokemonForm").val(); */
        var form = "item";
        var value = SpaceToBrace($("#itemInput").val());
        var myurl = "https://pokeapi.co/api/v2/" + form + "/" + value + "/";
        /*
        */
        $.ajax({
          /* */
            url : myurl,
            dataType : "json",
           beforeSend: function(){
                $('.pokeball').show();
                $('.pokeball__button').show();
            },

            success : function(json) {
            var results = "";
            console.log(json);
            if (form === "item") {
              var name = json.name;
              name = jsUcfirst(name);
              results += "<h2 style='text-align:center'>" + BraceToSpace(name) + ":</h2>";
              results += "<p>";
              var picture = json.sprites.default;
              results += '<img src=' + picture + ' class="sprities"/>';
              results += "</p>"
              var effect = json.effect_entries[0].short_effect;
              results += "<p class='effect'>" + effect;
              results += "</p>";

            }
            $("#itemResults").html(results);
          },
          complete:function(){
              $('.pokeball').hide();
              $('.pokeball__button').hide();
          }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          alert("No Item found\nTry using spaces and typing in all lower-case\n(ie. \"poke ball\")");
        });

   });
});
/* END WEATHER */

/**!
 * @preserve Shadow animation 1.11
 * http://www.bitstorm.org/jquery/shadow-animation/
 * Copyright 2011, 2013 Edwin Martin
 * Contributors: Mark Carver, Xavier Lepretre and Jason Redding
 * Released under the MIT and GPL licenses.
 */

jQuery(function($, undefined) {
	/**
	 * Check whether the browser supports RGBA color mode.
	 *
	 * Author Mehdi Kabab <http://pioupioum.fr>
	 * @return {boolean} True if the browser support RGBA. False otherwise.
	 */
	function isRGBACapable() {
		var $script = $('script:first'),
		color = $script.css('color'),
		result = false;
		if (/^rgba/.test(color)) {
			result = true;
		} else {
			try {
				result = (color !== $script.css('color', 'rgba(0, 0, 0, 0.5)').css('color'));
				$script.css('color', color);
			} catch (e) {
			}
		}
		$script.removeAttr('style');

		return result;
	}

	$.extend(true, $, {
		support: {
			'rgba': isRGBACapable()
		}
	});

	/*************************************/

	// First define which property to use
	var styles = $('html').prop('style');
	var boxShadowProperty;
	$.each(['boxShadow', 'MozBoxShadow', 'WebkitBoxShadow'], function(i, property) {
		var val = styles[property];
		if (typeof val !== 'undefined') {
			boxShadowProperty = property;
			return false;
		}
	});

	// Extend the animate-function
	if (boxShadowProperty) {
		$['Tween']['propHooks']['boxShadow'] = {
			get: function(tween) {
				return $(tween.elem).css(boxShadowProperty);
			},
			set: function(tween) {
				var style = tween.elem.style;
				var p_begin = parseShadows($(tween.elem)[0].style[boxShadowProperty] || $(tween.elem).css(boxShadowProperty));
				var p_end = parseShadows(tween.end);
				var maxShadowCount = Math.max(p_begin.length, p_end.length);
				var i;
				for(i = 0; i < maxShadowCount; i++) {
					p_end[i] = $.extend({}, p_begin[i], p_end[i]);
					if (p_begin[i]) {
						if (!('color' in p_begin[i]) || $.isArray(p_begin[i].color) === false) {
							p_begin[i].color = p_end[i].color || [0, 0, 0, 0];
						}
					} else {
						p_begin[i] = parseShadows('0 0 0 0 rgba(0,0,0,0)')[0];
					}
				}
				tween['run'] = function(progress) {
					var rs = calculateShadows(p_begin, p_end, progress);
					style[boxShadowProperty] = rs;
				};
			}
		};
	}

	// Calculate an in-between shadow.
	function calculateShadows(beginList, endList, pos) {
		var shadows = [];
		$.each(beginList, function(i) {
			var parts = [], begin = beginList[i], end = endList[i];

			if (begin.inset) {
				parts.push('inset');
			}
			if (typeof end.left !== 'undefined') {
				parts.push(parseFloat(begin.left + pos * (end.left - begin.left)) + 'px '
				+ parseFloat(begin.top + pos * (end.top - begin.top)) + 'px');
			}
			if (typeof end.blur !== 'undefined') {
				parts.push(parseFloat(begin.blur + pos * (end.blur - begin.blur)) + 'px');
			}
			if (typeof end.spread !== 'undefined') {
				parts.push(parseFloat(begin.spread + pos * (end.spread - begin.spread)) + 'px');
			}
			if (typeof end.color !== 'undefined') {
				var color = 'rgb' + ($.support['rgba'] ? 'a' : '') + '('
				+ parseInt((begin.color[0] + pos * (end.color[0] - begin.color[0])), 10) + ','
				+ parseInt((begin.color[1] + pos * (end.color[1] - begin.color[1])), 10) + ','
				+ parseInt((begin.color[2] + pos * (end.color[2] - begin.color[2])), 10);
				if ($.support['rgba']) {
					color += ',' + parseFloat(begin.color[3] + pos * (end.color[3] - begin.color[3]));
				}
				color += ')';
				parts.push(color);
			}
			shadows.push(parts.join(' '));
		});
		return shadows.join(', ');
	}

	// Parse the shadow value and extract the values.
	function parseShadows(shadow) {
		var parsedShadows = [];
		var parsePosition = 0;
		var parseLength = shadow.length;

		function findInset() {
			var m = /^inset\b/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsedShadow.inset = true;
				parsePosition += m[0].length;
				return true;
			}
			return false;
		}
		function findOffsets() {
			var m = /^(-?[0-9\.]+)(?:px)?\s+(-?[0-9\.]+)(?:px)?(?:\s+(-?[0-9\.]+)(?:px)?)?(?:\s+(-?[0-9\.]+)(?:px)?)?/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsedShadow.left = parseInt(m[1], 10);
				parsedShadow.top = parseInt(m[2], 10);
				parsedShadow.blur = (m[3] ? parseInt(m[3], 10) : 0);
				parsedShadow.spread = (m[4] ? parseInt(m[4], 10) : 0);
				parsePosition += m[0].length;
				return true;
			}
			return false;
		}
		function findColor() {
			var m = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsedShadow.color = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16), 1];
				parsePosition += m[0].length;
				return true;
			}
			m = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsedShadow.color = [parseInt(m[1], 16) * 17, parseInt(m[2], 16) * 17, parseInt(m[3], 16) * 17, 1];
				parsePosition += m[0].length;
				return true;
			}
			m = /^rgb\(\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*\)/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsedShadow.color = [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10), 1];
				parsePosition += m[0].length;
				return true;
			}
			m = /^rgba\(\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*\)/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsedShadow.color = [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10), parseFloat(m[4])];
				parsePosition += m[0].length;
				return true;
			}
			return false;
		}
		function findWhiteSpace() {
			var m = /^\s+/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsePosition += m[0].length;
				return true;
			}
			return false;
		}
		function findComma() {
			var m = /^\s*,\s*/.exec(shadow.substring(parsePosition));
			if (m !== null && m.length > 0) {
				parsePosition += m[0].length;
				return true;
			}
			return false;
		}
		function normalizeShadow(shadow) {
			if ($.isPlainObject(shadow)) {
				var i, sColor, cLength = 0, color = [];
				if ($.isArray(shadow.color)) {
					sColor = shadow.color;
					cLength = sColor.length;
				}
				for(i = 0; i < 4; i++) {
					if (i < cLength) {
						color.push(sColor[i]);
					} else if (i === 3) {
						color.push(1);
					} else {
						color.push(0);
					}
				}
			}
			return $.extend({
				'left': 0,
				'top': 0,
				'blur': 0,
				'spread': 0
			}, shadow);
		}
		var parsedShadow = normalizeShadow();

		while (parsePosition < parseLength) {
			if (findInset()) {
				findWhiteSpace();
			} else if (findOffsets()) {
				findWhiteSpace();
			} else if (findColor()) {
				findWhiteSpace();
			} else if (findComma()) {
				parsedShadows.push(normalizeShadow(parsedShadow));
				parsedShadow = {};
			} else {
				break;
			}
		}
		parsedShadows.push(normalizeShadow(parsedShadow));
		return parsedShadows;
	}
});

/*

*/
/* WORK IN PROGRESS */

// once audio loaded start playing and add movement classes
function start() {
	var audio = document.getElementById("music"),
		gengar = document.getElementById("gengar"),
		jigglypuff = document.getElementById("jigglypuff"),
		screen = document.getElementById("screen"),
		start = document.getElementById("start");

	audio.play();
	gengar.className = gengar.className + " animated";
	jigglypuff.className = jigglypuff.className + " animated";
	screen.className = screen.className + " animated";
	start.removeAttribute("onclick");

	// quick and dirty way to reset things after the animation.
	setTimeout(function() {
		gengar.className = "";
		jigglypuff.className = "";
		screen.className = "";
		start.setAttribute("onclick", "start()");
	}, 12000);
}
