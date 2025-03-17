export const AuthorBio = ({ author }) => (
    <div className="bg-gray-50 p-6 rounded-lg mt-8">
      <div className="flex items-center gap-4">
        <img 
          src={author.avatar} 
          alt={author.name}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="text-xl font-bold">{author.name}</h3>
          <p className="text-gray-600">{author.role}</p>
          <div className="flex gap-3 mt-2">
            {author.socials?.twitter && (
              <a href={author.socials.twitter} className="text-blue-600">
                <TwitterIcon className="w-5 h-5" />
              </a>
            )}
            {author.socials?.linkedIn && (
              <a href={author.socials.linkedIn} className="text-blue-600">
                <LinkedInIcon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{author.bio}</p>
    </div>
  )