import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'
const PostFilter = function ({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        placeholder="Searc..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        defaultValue="Sort"
        options={[
          { value: 'title', name: 'Per name' },
          { value: 'body', name: 'Per discription' },
        ]}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  )
}
export default PostFilter
