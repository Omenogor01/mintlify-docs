---

### **New Component: `components/blog/ResourceList.jsx`**
A component for listing helpful resources.

/**
 * ResourceList Component
 * Description: A React component for displaying a list of helpful resources with links, titles, and descriptions. Designed for accessibility and SEO optimization.
 * Author: Your Name
 * Last Updated: 2025-04-29
 * Tags: ["Resource List", "React Component", "SEO", "Accessibility"]
 */

export const ResourceList = ({ resources }) => (
  <div className="space-y-4">
    {resources.map((resource, index) => (
      <a
        key={index}
        href={resource.link}
        className="block bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Learn more about ${resource.title}`}
      >
        <h4 className="font-bold text-gray-800">{resource.title}</h4>
        <p className="text-sm text-gray-600">{resource.description}</p>
      </a>
    ))}
  </div>
);

// Example Usage
// <ResourceList
//   resources={[
//     { title: "SPF Record Guide", description: "Learn how to configure SPF records.", link: "https://example.com/spf-guide" },
//     { title: "Email Deliverability Tips", description: "Improve your email deliverability with these tips.", link: "https://example.com/deliverability-tips" },
//     { title: "DNS Configuration Basics", description: "Understand the basics of DNS configuration.", link: "https://example.com/dns-basics" },
//   ]}
// />