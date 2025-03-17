export const Video = ({ src, title }) => (
  <div className="my-6">
    <video
      controls
      className="w-full aspect-video rounded-lg"
      src={src}
      title={title}
    />
    <p className="text-sm text-gray-600 mt-2">{title}</p>
  </div>
)