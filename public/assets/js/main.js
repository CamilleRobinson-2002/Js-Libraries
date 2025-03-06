// Floating Object JS ALL TITLES HAVE FUN FACTS
import {
    computePosition,
    flip,
    shift,
    offset,
    arrow,
} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.13/+esm';

// Select all buttons and tooltips
const buttons = document.querySelectorAll('[id="button"]'); 
const tooltips = document.querySelectorAll('[id="tooltip"]'); 
const arrows = document.querySelectorAll('[id="arrow"]'); 

buttons.forEach((button, index) => {
    const tooltip = tooltips[index]; 
    const arrowElement = arrows[index];

    function update() {
        computePosition(button, tooltip, {
            placement: 'top',
            middleware: [
                offset(6),
                flip(),
                shift({ padding: 5 }),
                arrow({ element: arrowElement }),
            ],
        }).then(({ x, y, placement, middlewareData }) => {
            Object.assign(tooltip.style, {
                left: `${x}px`,
                top: `${y}px`,
                display: 'block', // Ensure it shows up
            });

            // Access arrow positioning data
            const { x: arrowX, y: arrowY } = middlewareData.arrow;

            const staticSide = {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[placement.split('-')[0]];

            Object.assign(arrowElement.style, {
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null ? `${arrowY}px` : '',
                right: '',
                bottom: '',
                [staticSide]: '-4px',
            });
        });
    }

    function showTooltip() {
        tooltip.style.display = 'block';
        update();
    }

    function hideTooltip() {
        tooltip.style.display = '';
    }

    // Attach event listeners to each button
    button.addEventListener('mouseenter', showTooltip);
    button.addEventListener('mouseleave', hideTooltip);
    button.addEventListener('focus', showTooltip);
    button.addEventListener('blur', hideTooltip);
});


// Glide JS FOR ALL CAROUSEL SECTIONS
const config = {
    type: 'carousel',
    perView: 3,
};

// Select all elements with class "glide"
document.querySelectorAll('.glide').forEach((glide) => {
    new Glide(glide, config).mount();
});

// Parsly JS FORM VALIDATION IN FOOTER
$(document).ready(function () {
    var $sections = $('.form-section');

    function navigateTo(index) {
        // Hide all sections and show the current one
        $sections.removeClass('current').eq(index).addClass('current');

        // Show/hide navigation buttons
        $('.form-btn-prev').toggle(index > 0);
        $('.form-btn-next').toggle(index < $sections.length - 1);
        $('.form-btn-submit').toggle(index === $sections.length - 1);
    }

    function curIndex() {
        return $sections.index($sections.filter('.current'));
    }

    // Next button
    $('.form-btn-next').click(function () {
        if ($('.demo-form').parsley().validate({ group: 'block-' + curIndex() })) {
            navigateTo(curIndex() + 1);
        }
    });

    // Previous button
    $('.form-btn-prev').click(function () {
        navigateTo(curIndex() - 1);
    });

    // Assign validation groups
    $sections.each(function (index) {
        $(this).find(':input').attr('data-parsley-group', 'block-' + index);
    });

    // Start at first section
    navigateTo(0);
});

// Granim JS FOR ALL 3 TITLES
document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("logo-canvas");

    // Ensure canvas has explicit size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Initialize Granim.js
    var granimInstance = new Granim({
        element: "#logo-canvas",
        direction: "left-right",
        states: {
            "default-state": {
                gradients: [
                    ["#FFE1EC", "#FFD7E2"],
                    ["#FFCDD8", "#FFC3CE"],
                    ["#FFB9C4", "#FFE1EC"],
                ],
                transitionSpeed: 500,
            },
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("logo-canvas1");

    // Ensure canvas has explicit size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Initialize Granim.js
    var granimInstance = new Granim({
        element: "#logo-canvas1",
        direction: "left-right",
        states: {
            "default-state": {
                gradients: [
                    ["#FFE1EC", "#FFD7E2"],
                    ["#FFCDD8", "#FFC3CE"],
                    ["#FFB9C4", "#FFE1EC"],
                ],
                transitionSpeed: 500,
            },
        },
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("logo-canvas2");

    // Ensure canvas has explicit size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Initialize Granim.js
    var granimInstance = new Granim({
        element: "#logo-canvas2",
        direction: "left-right",
        states: {
            "default-state": {
                gradients: [
                    ["#FFE1EC", "#FFD7E2"],
                    ["#FFCDD8", "#FFC3CE"],
                    ["#FFB9C4", "#FFE1EC"],
                ],
                transitionSpeed: 500,
            },
        },
    });
});


