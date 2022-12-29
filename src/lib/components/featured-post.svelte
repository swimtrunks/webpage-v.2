<script>
    export let post 
</script>
<section>
    <h1>Featured</h1>
    <a href="{post.slug}" class = "featured-card">
        <img src = {post.coverImage} alt = {post.alt_text}/>
        <div>
            <!-- <a href="/{post.slug}">{post.title} <br /> </a> -->
            <h2>{post.title}</h2> <br />
            <p>
                {post.excerpt}
            </p>
            written on: {post.date}
        </div>
    </a>
</section>

<style lang="scss">
    a{
        text-decoration: none;
        &:hover{
           transition: 500ms;
           background-color: rgba(255, 255, 255, 0.698);
           border-radius: 1rem;
           box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.1), 0px 24px 38px 3px rgba(0, 0, 0, 0.07), 0px 9px 46px 8px rgba(0, 0, 0, 0.06);
        }
    }
    h1{
        font-size: 1.75rem;
    }
    section{
        display: block;
        border-radius: 1rem;
        background-color: rgba(255, 255, 255, 0.411);
    }
    .featured-card{
        display: flex;
        gap: 1rem;
        img{
            width: 50%;
            margin: 1rem;
        }
        p{
            font-size: 1rem;
        }
    }
</style>