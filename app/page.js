
"use Client"
import Link from 'next/link';
import ImageSlideshow from './src/components/image-slideshow';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>

  <ImageSlideshow/>
        <div>
          <div className={classes.hero}>
            <h1>ToDoApp</h1>
            <p>Orgonize youre day with our App.</p>
          </div>
          <div className={classes.cta}>
          <Link href="/comunity"> comunity</Link>
          <Link href="/meals/share"> share youre tasks</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
         you have the list of tasks whic are compleated or not so youll kepp track of it 
         you can add youre tasks to 
          </p>
         

        </section>

        <section className={classes.section}>
          <h2>Why ToDoApp?</h2>
          <p>
          "Stay organized and boost productivity
           with our simple yet powerful to-do app. 
           Manage tasks efficiently, set priorities, 
           and never miss a deadline again. Whether for work, school, or personal projects,
            our app keeps you focused and on track, helping you accomplish more with less effort!"
          </p>
          <p>
            contact us 
            ToDoApp@gmail.com
          </p>
        </section>
      </main>
    </>
  );
}