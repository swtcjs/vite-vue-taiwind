// import { Octokit } from "@octokit/rest"
import { Octokit } from "https://cdn.skypack.dev/@octokit/rest"

export function octokitClient(token="") {
       	// return new (<any>window).Octokit({
       	return new Octokit({
	  auth: token,
	  userAgent: 'myApp v1.2.3',
	  baseUrl: 'https://api.github.com',
	  log: {
	    debug: () => {},
	    info: () => {},
	    warn: console.warn,
	    error: console.error
	  },
	  request: {
	    agent: undefined,
	    fetch: undefined,
	    timeout: 0
	  }
	})
}
