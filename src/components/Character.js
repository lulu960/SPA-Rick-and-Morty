import createElement from "../utils/createElement";

const Card = ({ url,name, src, tagName = 'div' } = {}) => createElement(
    {
      tagName,
      children: [
        {
            tagName: 'a',
            attributes: {
                href: url,
            },
            text: name,
        },
        {
          tagName: 'img',
          attributes: {
            src: src
          }
        },
      ]
    }
  )

export default Card