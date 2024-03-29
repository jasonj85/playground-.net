﻿using BasicApi.Constants;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BasicApi.Controllers.v2;
[Route("api/v{verion:apiVersion}/[controller]")]
[ApiVersion("2.0")]
[ApiController]
public class UsersController : ControllerBase
{
    public IConfiguration _config { get; }

    public UsersController(IConfiguration config)
    {
        _config = config;
    }

    // GET: api/v2/users
    [HttpGet]
    public IEnumerable<string> Get()
    {
        List<string> output = new();
        for (int i = 0; i < Random.Shared.Next(2, 10); i++)
        {
            output.Add($"Value #{i + 1}");
        }

        return new string[] { "v2 value1", "value2" };
    }

    // GET api/v2/users/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
        return $"Value #{id}";
    }

    // POST api/v2/users
    [HttpPost]
    [Authorize(Policy = PolicyConstants.MustHaveEmployeeId)]
    public void Post([FromBody] string value)
    {
    }

    // PUT api/v2/users/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/v2/users/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
}
