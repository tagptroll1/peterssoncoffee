<script>
    export let size = "1em";
    export let width = size;
    export let height = size;
    export let color = "currentColor";
    export let viewBox = "0 0 24 24";
</script>

<!-- Arrow up svg icon -->
<svg 
xmlns="http://www.w3.org/2000/svg" 
{width}
{height}
{viewBox}
fill="none" 
stroke={color} 
stroke-width="2" 
stroke-linecap="round" 
stroke-linejoin="round" 
class="feather feather-arrow-up">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
</svg>
