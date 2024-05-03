using Application.Interfaces;
using Contracts.Files;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
	[Route("api/assets")]
	[ApiController]
	[Authorize]
	public class AssetsController : ControllerBase
	{
		private readonly IFileService _fileService;

		public AssetsController(IFileService fileService)
		{
			_fileService = fileService;
		}

		[HttpPost("images")]
		public IActionResult UploadImage([FromForm] FileUploadRequestDTO dto)
		{
			var path = _fileService.UploadFile(dto.image, "images/", dto.replaceImage);

			var response = new FileUploadResponseDTO(path);

			return Ok(response);
		}
	}
}
