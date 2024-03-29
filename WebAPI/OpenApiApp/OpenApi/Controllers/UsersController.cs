﻿using Microsoft.AspNetCore.Mvc;

namespace OpenApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    // GET: api/users
    /// <summary>
    /// Gets a list of all Users
    /// </summary>
    /// <returns>A list of Users</returns>
    [HttpGet]
    public IEnumerable<string> Get()
    {
        return new string[] { "value1", "value2" };
    }

    // GET api/users/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
        return "value";
    }

    // POST api/users
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

    // PUT api/users/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/users/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
}
