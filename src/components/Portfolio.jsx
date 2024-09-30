import React from 'react'
import PortfolioItem from './PortfolioItem'
import portfolio from '../data/portfolio'
export default function Portfolio() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
        <dir className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map(project => (
                <PortfolioItem imgUrl={project.imgUrl}
                               title={project.title}
                                stack ={project.stack}
                                link={project.link}
                />
            ))

            }

        </dir>
    </div>
  )
}
