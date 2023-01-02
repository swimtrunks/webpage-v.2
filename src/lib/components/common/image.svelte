<script>
   export let image, alttext, text;
</script>

<div>
    <img src ={image} alt={alttext} />
    <caption>{text}</caption>
</div>

<style>
    caption{
        display: block;
        color: rgb(116, 131, 107)
    }
</style>