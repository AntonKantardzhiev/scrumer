import styles from './page.module.css';
// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }
const Blog = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return <div className={styles.conteiner}>
    <h1>Blog</h1>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>{
        posts.forEach(post => (
   <th>{post.title}</th>
   <th>{post.id}</th>
        ))}
      </tbody>
    </table>
  </div >
};

export default Blog;
