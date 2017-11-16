import React from 'react'
import Link from 'gatsby-link'
import SearchBar from '../components/resources/searchbar'
import ResourceGrid from '../components/resources/resource-grid'
import Filter from '../components/resources/filter'

var resources = require('../data/resources')

const ResourcesPage = () => (
  <div className="resources">
    <SearchBar/>
    <ResourceGrid/>
    <Filter/>
  </div>
)

export default ResourcesPage
