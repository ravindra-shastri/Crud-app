import { useState } from 'react';
import { withRouter } from 'react-router-dom';

function EditBlog(props) {
  const id = props.location.id;
  const [title, setTitle] = useState(
    JSON.parse(localStorage.getItem('data'))[id].title
  );

  const [author, setAuthor] = useState(
    JSON.parse(localStorage.getItem('data'))[id].author
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem('data'));
    let obj = { title, author };
    data[id] = obj;
    localStorage.setItem('data', JSON.stringify(data));
    props.history.push('/');
  };

  const handleChange = ({ target }) => {
    let { id } = target.dataset;
    if (id === 'title') {
      setTitle(target.value);
    }
    if (id === 'author') {
      setAuthor(target.value);
    }
  };
  return (
    <div className="edit-ui">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          data-id="title"
          onChange={handleChange}
          placeholder="Enter Blog Title"
        />
        <input
          type="text"
          value={author}
          data-id="author"
          onChange={handleChange}
          placeholder="Enter Author Name"
          required
        />
        <input
          type="submit"
          value="Update Blog"
          className="update-blog"
        />
      </form>
    </div>
  )
}
export default withRouter(EditBlog);