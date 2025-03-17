---

### **New Component: `components/blog/ResourceList.jsx`**
A component for listing helpful resources.

```jsx
export const ResourceList = ({ resources }) => (
  <div className="space-y-4">
    {resources.map((resource, index) => (
      <a
        key={index}
        href={resource.link}
        className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
      >
        <h4 className="font-bold">{resource.title}</h4>
        <p className="text-sm text-gray-600">{resource.description}</p>
      </a>
    ))}
  </div>
);