import { useState } from 'react';
import Blog from './components/Blog';
import BlogForm from './components/BlogForm';

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('data')) || []
  );

  const addBlog = (title, author) => {
    let obj = { title, author };
    setData(data.concat(obj));
    localStorage.setItem('data', JSON.stringify(data.concat(obj)));
  };

  const removeBlog = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(newData));
    setData(newData);
  };

  return (
    <div>
      <h2 className="header">
        Blog List!
      </h2>
      <BlogForm addBlog={addBlog} />
      <div>
        {
          data.map((blog, index) => (
            <Blog
              key={index}
              index={index}
              blog={blog}
              removeBlog={removeBlog}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
