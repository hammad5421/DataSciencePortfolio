import React from 'react';

export default function TagList({ tags, tagProps = {}, ...props }: { tags: string[], tagProps?: { [key: string]: any } }) {
  return (
    <div className="tag-list" {...props}>
      {
        tags.map((tag, i) => [
          i > 0 && <span key={-i} style={{ marginRight: "5px" }}>, </span>,
          <code key={i} className="tag-list-tag" {...tagProps}>{tag}</code>
        ])
      }
    </div>
  );
}
